export const ImgSection = ({ protein }) => {
  const image1Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/IF/${protein}-Final.jpg`
  const image2Url = `https://raw.githubusercontent.com/laboFMB/DCAF-data/main/data/${protein}/WB/${protein}.jpg`
  return (
    <>
      <img alt="Western Blot" src={image2Url} height="500px" />
      <img alt="Immunofluorescence" src={image1Url} height="500px" />
    </>
  )
}
