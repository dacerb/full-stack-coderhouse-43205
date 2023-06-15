function FormatPrice({price}) {
  return (
    <>
      {price.toLocaleString("en", {style: "currency", currency: "USD"})}
    </>
  )
}
export default FormatPrice