import { config } from "./config";
import { StyledOffers, Items, Item, Icon, Subtitle } from "./styles";
import supportIcon from "../../../assets/offers/support.svg";
import communicateIcon from "../../../assets/offers/communicate.svg";
import onlineIcon from "../../../assets/offers/online.svg";
import reviewsIcon from "../../../assets/offers/reviews.svg";

export const Offers = () => {
  return (
    <StyledOffers className="container block">
      <h2 className="title">{config.title}</h2>
      <Items>
        <Item>
          <Icon src={supportIcon} alt={config.listItemsTitles.support} />
          <Subtitle>{config.listItemsTitles.support}</Subtitle>
        </Item>
        <Item>
          <Icon
            src={communicateIcon}
            alt={config.listItemsTitles.communicate}
          />
          <Subtitle>{config.listItemsTitles.communicate}</Subtitle>
        </Item>
        <Item>
          <Icon src={onlineIcon} alt={config.listItemsTitles.online} />
          <Subtitle>{config.listItemsTitles.online}</Subtitle>
        </Item>
        <Item>
          <Icon src={reviewsIcon} alt={config.listItemsTitles.reviews} />
          <Subtitle>{config.listItemsTitles.reviews}</Subtitle>
        </Item>
      </Items>
    </StyledOffers>
  );
};
