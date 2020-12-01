import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Наши услуги</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Стандарт</PricingCardPlan>
                <PricingCardCost>$30.00</PricingCardCost>
                <PricingCardLength>в месяц</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 новых пользователей</PricingCardFeature>
                  <PricingCardFeature>$10,000 бюджет</PricingCardFeature>
                  <PricingCardFeature>Аналитика</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Выбрать</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Премиум</PricingCardPlan>
                <PricingCardCost>$60.00</PricingCardCost>
                <PricingCardLength>в месяц</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 новых пользователей</PricingCardFeature>
                  <PricingCardFeature>$50,000 бюджет</PricingCardFeature>
                  <PricingCardFeature>Аналитика</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Выбрать</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Люкс</PricingCardPlan>
                <PricingCardCost>$100.00</PricingCardCost>
                <PricingCardLength>в месяц</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Неограниченное количество</PricingCardFeature>
                  <PricingCardFeature>Неограниченный бюджет</PricingCardFeature>
                  <PricingCardFeature>Поддержка круглосуточно</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Выбрать</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
