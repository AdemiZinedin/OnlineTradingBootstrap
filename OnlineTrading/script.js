// Function to fetch and display NFT metadata
function getNFTMetadata(nftId) {
  // Make an API request to fetch the NFT metadata
  fetch(`https://api.example.com/nfts/${nftId}`)
    .then(response => response.json())
    .then(data => {
      // Display the NFT metadata on the website
      const nftName = data.name;
      const nftImage = data.image;
      const nftDescription = data.description;

      // Update the HTML elements with the NFT metadata
      document.getElementById('nft-name').textContent = nftName;
      document.getElementById('nft-image').setAttribute('src', nftImage);
      document.getElementById('nft-description').textContent = nftDescription;
    })
    .catch(error => {
      console.error('Error fetching NFT metadata:', error);
    });
    getNFTMetadata('https://api.example.com/nfts/${nftId}');
}