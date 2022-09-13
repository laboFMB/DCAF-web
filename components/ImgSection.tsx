export const ImgSection = ({ protein }) => {
  const image1Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IF/${protein}-Final.jpg`
  const image2Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/WB/${protein}.jpg`
  return (
    <>
      <img alt="N/A" src={image2Url} height="500px" />
      <img alt="N/A" src={image1Url} height="500px" />
    </>
  )
}
