import { Helmet } from "react-helmet-async"

const Meta = ({title,descrition,keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={descrition} />
        <meta name="keyword" content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: "NShop",
  descrition: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics"
}

export default Meta