import { useState } from 'react';
import { Box, Button, Flex, Input, Spacer, Text } from '@chakra-ui/react';
import { validateEmail } from 'utils';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event: any) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // prevent sending the form if invalid email
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email.');

      return;
    }

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // handle errors
    const { error } = await response.json();
    if (error) {
      setMessage(error);

      return;
    }

    // reset input and show message
    setEmail('');
    setMessage('You are now subscribed!');
  };

  return (
    <Box mt={{ base: 8, lg: 0 }}>
      <Text>
        A single message once a month containing the latest mixtape, insights, and observations.
      </Text>

      <form onSubmit={handleSubmit}>
        <Flex py={3} mt={4} mb={6} borderBottom="1px solid">
          <Box w="60%">
            <Input
              aria-label="email address"
              id="emailInput"
              name="email"
              onChange={handleChange}
              placeholder="Email address"
              required
              type="email"
              sx={{
                '&::placeholder': {
                  color: 'rockBottom',
                },
              }}
            />
          </Box>
          <Spacer />
          <Box>
            <Button textStyle="heavy" type="submit" variant="inline">
              Subscribe
            </Button>
          </Box>
        </Flex>
      </form>

      {message && (
        <Text data-testid="feedback" fontWeight="bold" mt={4} mb={6}>
          {message}
        </Text>
      )}
    </Box>
  );
};

export default Newsletter;
