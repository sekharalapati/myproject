import React, { useState, useEffect } from 'react';

const useFitch = () => {
  const [imageUrl, setImageUrl] = useState(null); // State to store image URL
  const [loading, setLoading] = useState(true); // State to indicate loading status
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Fetch image data when the component mounts
    fetch('https://xvivjtnsgdarwhkrkznh.supabase.co/storage/v1/object/public/vocabularyCMS/Adverb/669a0e6d55b9721bcc64b9c3/img.png')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // Get the response as a blob
      })
      .then(blob => {
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        setImageUrl(url); // Set the image URL to state
        setLoading(false); // Update loading status
      })
      .catch(error => {
        setError(error); // Handle any errors
        setLoading(false); // Update loading status
      });
  }, []); // Empty dependency array means this effect runs once when component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <img id='fitch-img' src={imageUrl} alt="Fetched content" />
    </div>
  );
};

export default useFitch;
