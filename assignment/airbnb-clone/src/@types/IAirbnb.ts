interface ContextualPicture {
  // contextualPictures 내의 필드와 타입을 추가하세요.
}

interface StaySearchResultListing {
  __typename: string;
  avgRatingA11yLabel: string;
  avgRatingLocalized: string;
  city: string;
  contextualPictures: ContextualPicture[];
  // 여기에 더 많은 필드를 추가하세요.
}

interface ExploreListingParamOverrides {
  __typename: string;
  adults: number;
  categoryTag: string;
  causeId: null | string; // null이 가능한 경우도 처리합니다.
  checkin: string;
  // 여기에 더 많은 필드를 추가하세요.
}

interface ExplorePricingQuote {
  __typename: string;
  applicableDiscounts: null; // 이 필드의 정확한 타입을 알 수 없으므로, 추가 정보가 필요합니다.
  barDisplayPriceWithoutDiscount: null; // 이 필드의 정확한 타입을 알 수 없으므로, 추가 정보가 필요합니다.
  canInstantBook: boolean;
  displayRateDisplayStrategy: null; // 이 필드의 정확한 타입을 알 수 없으므로, 추가 정보가 필요합니다.
  // 여기에 더 많은 필드를 추가하세요.
}

export interface IAirbnb {
  __typename: string;
  listing: StaySearchResultListing;
  listingParamOverrides: ExploreListingParamOverrides;
  pricingQuote: ExplorePricingQuote;
}
