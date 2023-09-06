/* eslint-disable max-len */
import React, { useContext } from 'react';
import { theme } from '../../styles';
import { ContentLayout } from '../shared/ContentLayout';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MainElement,
  PathAndBack,
  Title,
  H2,
  H3,
  P,
  Theader,
  THead,
  TRow,
  DescriptionWrapper,
  ItemCard,
  ImagesBox,
  CardInfo,
  AboutBlock,
  SpecsBlock,
  CardWrapper,
  TechScecsInfo,
  TableRow,
  TableHeader,
  TableData,
  ChoiseWrapper,
  ChoiseButtons,
  MemoryButton,
  TitleChoise,
  ColorButton,
  DeviceId,
  ImageSizeBox,
  ImagesSizeBox,
  CardImage,
  ImagesWrapper,
  SmallCardImage,
  RecommendedBlock,
} from './ProductCard.styled';

import {
  CurrentPrice,
  DescrBox,
  DescrTitle,
  DescrWrapper,
  DescrValue,
  OldPrice,
  PriceWrapper,
  ButtonsWrapper,
  ButtonAdd,
  ButtonLike,
} from './../shared/PhoneCard/PhoneCard.styled';
import { Icon, IconSprite } from '../shared';
import { colorMappings } from './colorMappings';
import { getOnePhone } from '../../api/phonesAPI';
import { Phone } from '../../types/Phone';
import { BackButton } from '../shared/BackButton';
import { CartContext, FavoriteContext, PhonesContext } from '../../context';
import { ProductsSlider } from '../HomePage/components/ProductsSlider/ProductsSlider';
import { TailSpin } from 'react-loader-spinner';
import { Breadcrumbs } from '../shared/Breadcrumbs';

function extractData(obj: Record<string, any>) {
  const result: Record<string, any> = {};
  let isDescriptionSection = false;

  for (const [key, value] of Object.entries(obj)) {
    if (isDescriptionSection) {
      result[key] = value;
    }

    if (key === 'description') {
      isDescriptionSection = true;
    }
  }

  return result;
}

export const ProductCard = () => {
  const { productId } = useParams();
  const [device, setDevice] = React.useState<Phone | null>(null);
  const { addItem, cartProducts } = React.useContext(CartContext);
  const { addFavoriteProduct, favoriteProducts }
    = React.useContext(FavoriteContext);
  const [selectedCapacity, setSelectedCapacity] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');
  const [currentImage, setCurrentImage] = React.useState(device?.images[0]);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async() => {
      setLoading(true);

      try {
        if (productId) {
          const response = await getOnePhone(productId);
          const responseData = response as Phone;

          if (responseData.capacity) {
            setSelectedCapacity(responseData.capacity);
          }

          if (!responseData.capacity) {
            setSelectedCapacity(
              productId.split('-')[productId.split('-').length - 2],
            );
          }

          if (responseData.color) {
            setSelectedColor(responseData.color);
          }

          if (!responseData.color) {
            setSelectedColor(
              productId.split('-')[productId.split('-').length - 1],
            );
          }

          setDevice(responseData);

          setCurrentImage(responseData.images[0]);
          setSelectedImage(responseData.images[0]);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const { loadPhones, newData } = useContext(PhonesContext);

  React.useEffect(() => {
    loadPhones('recommended/recommended');
  }, []);

  if (!device) {
    return null;
  }

  const deviceData = extractData(device);

  const isSelected = cartProducts.find((product) => product._id === device._id);
  const isFavorite = favoriteProducts.find(
    (product) => product._id === device._id,
  );

  const toggleClick = (phoneData: Phone) => {
    addItem(phoneData);
  };

  const toggleFavorite = (phoneData: Phone) => {
    addFavoriteProduct(phoneData);
  };

  const handleButtonClick = (capacity: string) => {
    const firstPartCurrentPoductId = productId
      ?.split('-')
      .slice(0, -2)
      .join('-');
    const newProductId = `${firstPartCurrentPoductId}-${capacity?.toLowerCase()}-${selectedColor}`;

    navigate(`./../${newProductId}`);
  };

  const handleColorClick = (color: string) => {
    const firstPartCurrentPoductId = productId
      ?.split('-')
      .slice(0, -2)
      .join('-');
    const newProductId = `${firstPartCurrentPoductId}-${selectedCapacity?.toLowerCase()}-${color}`;

    navigate(`./../${newProductId}`);
  };

  return (
    <ContentLayout>
      <MainElement>
        <PathAndBack>
          <Breadcrumbs />
          <BackButton />
        </PathAndBack>
        {loading ? (
          <TailSpin
            height="80"
            width="80"
            color="#89939A"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <>
            <Title>{device.name}</Title>
            <ItemCard>
              <ImagesBox>
                <ImageSizeBox>
                  <CardImage src={currentImage} alt="Phone image" />
                </ImageSizeBox>
                <ImagesWrapper>
                  {device.images.map((img) => (
                    <ImagesSizeBox
                      onClick={() => {
                        setCurrentImage(img);
                        setSelectedImage(img);
                      }}
                      className={selectedImage === img ? 'active' : ''}
                    >
                      <SmallCardImage
                        key={img}
                        src={img}
                        alt="Small phone image"
                      />
                    </ImagesSizeBox>
                  ))}
                </ImagesWrapper>
              </ImagesBox>
              <CardInfo>
                <CardWrapper>
                  {device.colorsAvailable && (
                    <ChoiseWrapper>
                      <TitleChoise>Available colors</TitleChoise>
                      <ChoiseButtons>
                        {device.colorsAvailable.map((color) => (
                          <ColorButton
                            className={selectedColor === color ? 'active' : ''}
                            onClick={() => handleColorClick(color)}
                            style={{ backgroundColor: colorMappings[color] }}
                          ></ColorButton>
                        ))}
                      </ChoiseButtons>
                    </ChoiseWrapper>
                  )}

                  {device.capacityAvailable && (
                    <ChoiseWrapper>
                      <TitleChoise>Select capacity</TitleChoise>
                      <ChoiseButtons>
                        {device.capacityAvailable.map((capacity) => (
                          <MemoryButton
                            className={
                              selectedCapacity === capacity ? 'active' : ''
                            }
                            onClick={() => handleButtonClick(capacity)}
                          >
                            {capacity}
                          </MemoryButton>
                        ))}
                      </ChoiseButtons>
                    </ChoiseWrapper>
                  )}

                  <PriceWrapper className="card-price">
                    <CurrentPrice className="card-current-price">
                      {`$${device.priceDiscount}`}
                    </CurrentPrice>
                    <OldPrice className="card-old-price">
                      {`$${device.priceRegular}`}
                    </OldPrice>
                  </PriceWrapper>

                  <ButtonsWrapper className="card-button">
                    <ButtonAdd
                      onClick={() => {
                        toggleClick(device);
                      }}
                      type="button"
                      isClicked={isSelected}
                      className="card-button-add"
                    >
                      {isSelected ? 'Added' : 'Add to cart'}
                    </ButtonAdd>
                    <ButtonLike
                      type="button"
                      onClick={() => {
                        toggleFavorite(device);
                      }}
                      className="card-button-like"
                    >
                      <IconSprite />
                      {isFavorite ? (
                        <Icon
                          spriteName="heart-field"
                          fill={theme.colors.accentSecondary}
                        />
                      ) : (
                        <Icon spriteName="heart" />
                      )}
                    </ButtonLike>
                  </ButtonsWrapper>

                  <DescrWrapper>
                    <DescrBox>
                      {device.screen && <DescrTitle>Screen</DescrTitle>}
                      {device.resolution && <DescrTitle>Resolution</DescrTitle>}
                      {device.processor && <DescrTitle>Processor</DescrTitle>}
                      {device.ram && <DescrTitle>Ram</DescrTitle>}
                    </DescrBox>

                    <DescrBox>
                      <DescrValue>{device.screen}</DescrValue>
                      <DescrValue>{device.resolution}</DescrValue>
                      <DescrValue>{device.processor}</DescrValue>
                      <DescrValue>{device.ram}</DescrValue>
                    </DescrBox>
                  </DescrWrapper>
                </CardWrapper>
                <DeviceId>ID: {device._id}</DeviceId>
              </CardInfo>
              <AboutBlock>
                <H2>About</H2>
                {device.description
                  && device.description.map((info) => (
                    <DescriptionWrapper key={info.title}>
                      <H3>{info.title}</H3>
                      {Array.isArray(info.text)
                        && info.text.map((text: string) => <P>{text}</P>)}
                    </DescriptionWrapper>
                  ))}
              </AboutBlock>
              <SpecsBlock>
                <THead>
                  <TRow>
                    <Theader>Tech Spec</Theader>
                  </TRow>
                </THead>
                <TechScecsInfo>
                  {Object.entries(deviceData).map(
                    ([key, value]) =>
                      value && (
                        <TableRow key={key}>
                          <TableHeader>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </TableHeader>
                          <TableData>
                            {Array.isArray(value) ? value.join(' ') : value}
                          </TableData>
                        </TableRow>
                      ),
                  )}
                </TechScecsInfo>
              </SpecsBlock>
            </ItemCard>
          </>
        )}
      </MainElement>
      {!loading && (
        <RecommendedBlock>
          <ProductsSlider
            data={newData}
            uniqueKey="recommended"
            subtitle="You may also like"
          />
        </RecommendedBlock>
      )}
    </ContentLayout>
  );
};
