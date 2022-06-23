import styled from "styled-components";
import { mediaMax } from "../config/functions";
import { fwMedium, generalBlue, screenLgMax, screenMdMax, screenSmMax, textXs, textMd, textLg, textXl, textXxl, secondaryText, bgColor } from "../config/variables";

export const Hotels = styled.section`
    background: ${bgColor};

    & .hotels__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 120px;

        ${mediaMax(screenLgMax,
            'padding-bottom: 80px;'
        )}

        ${mediaMax(screenSmMax,
            'padding-bottom: 40px;'
        )}
    }

    & .hotels__title {
        margin: 100px 0;
        ${textXxl}
        font-weight: ${fwMedium};
        text-align: center;

        ${mediaMax(screenLgMax,
            `margin: 65px 0;
            ${textXl}`    
        )}

        ${mediaMax(screenSmMax,
            'margin: 35px 0;'   
        )}
    }

    & .hotels__items {
        display: flex;
        gap: 16px;
        overflow-x: hidden;
    }
`

export const Hotel = styled.article`
    & .hotel__image {
        max-width: 296px;
        min-width: 296px;
        height: 296px;
        object-fit: cover;
        margin-bottom: 24px;

        ${mediaMax(screenMdMax,
            `max-width: 220px;
            min-width: 220px;
            height: 220px;
            margin-bottom: 8px;`
        )}

        ${mediaMax(screenSmMax,
            `max-width: 156px;
            min-width: 156px;
            height: 156px;`
        )}
    }

    & .hotel__title {
        margin-bottom: 24px;
        ${textLg}
        color: ${generalBlue};
        text-align: start;

        ${mediaMax(screenMdMax,
            `margin-bottom: 12px;
            ${textMd}`
        )}

        ${mediaMax(screenSmMax,
            `margin-bottom: 12px;
            ${textXs}`
        )}
    }

    & .hotel__subtitle {
        margin-bottom: 24px;
        ${textLg}
        color: ${secondaryText};
        text-align: start;

        ${mediaMax(screenMdMax,
            `margin-bottom: 0;
            ${textMd}`
        )}

        ${mediaMax(screenSmMax,
            `${textXs}`
        )}
    }
`