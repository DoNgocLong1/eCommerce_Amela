import { Rate } from "antd";
import { productDetail } from "apiServices/productService";
import Loading from "components/common/Loading/Loading";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  ProductDetailWrapper,
  ProductGalleryWrapper,
  ProductInfoWrapper,
  ProductMainImg,
  ProductName,
  RateWrapper,
  RateNumber,
  SpecificationDetail,
  SpecificationName,
  SpecificationsContainer,
  SpecificationWrapper,
  GalleryWrapper,
  GalleryImg,
} from "./ProductDetail.styled";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const { data, isLoading } = useQuery({
    queryKey: ["productDetail"],
    queryFn: () => productDetail(+params.id),
  });
  const productDetailData = data?.data.data;
  console.log(productDetailData);
  if (isLoading) return <Loading />;
  if (!productDetailData) return null;
  return (
    <Container>
      <ProductDetailWrapper>
        <ProductGalleryWrapper>
          <ProductMainImg src={productDetailData?.images[0]?.product_img} />
          <GalleryWrapper>
            <GalleryImg src={productDetailData?.images[0]?.product_img} />
            <GalleryImg src={productDetailData?.images[0]?.product_img} />
            <GalleryImg src={productDetailData?.images[0]?.product_img} />
            <GalleryImg src={productDetailData?.images[0]?.product_img} />
          </GalleryWrapper>
        </ProductGalleryWrapper>
        <ProductInfoWrapper>
          <ProductName>{productDetailData.name}</ProductName>
          <RateWrapper>
            <Rate disabled allowHalf defaultValue={+productDetailData.rate} />
            <RateNumber>({productDetailData.rate})</RateNumber>
          </RateWrapper>
          <SpecificationsContainer>
            <SpecificationWrapper>
              <SpecificationName>Brand:</SpecificationName>
              <SpecificationDetail>
                {productDetailData.brand}
              </SpecificationDetail>
            </SpecificationWrapper>
            <SpecificationWrapper>
              <SpecificationName>Type:</SpecificationName>
              <SpecificationDetail>
                {productDetailData.type}
              </SpecificationDetail>
            </SpecificationWrapper>
          </SpecificationsContainer>
        </ProductInfoWrapper>
      </ProductDetailWrapper>
    </Container>
  );
};

export default ProductDetail;
