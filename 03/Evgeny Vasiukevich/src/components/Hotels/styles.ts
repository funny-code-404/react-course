import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import { getFontsFragment, mediaMax } from "../../utils/utils";

export const Hotels = styled.section`
    background: ${baseTheme.colors.bgColor};

    & .hotels__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 120px;

        ${mediaMax(baseTheme.media.large,
            'padding-bottom: 80px;'
        )}

        ${mediaMax(baseTheme.media.small,
            'padding-bottom: 40px;'
        )}
    }

    & .hotels__title {
        margin: 100px 0;
        ${getFontsFragment('xxl')}
        font-weight: ${baseTheme.fontWeights.medium};
        text-align: center;

        ${mediaMax(baseTheme.media.large,
            `margin: 65px 0;
            ${getFontsFragment('xl')}`    
        )}

        ${mediaMax(baseTheme.media.small,
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

        ${mediaMax(baseTheme.media.medium,
            `max-width: 220px;
            min-width: 220px;
            height: 220px;
            margin-bottom: 8px;`
        )}

        ${mediaMax(baseTheme.media.small,
            `max-width: 156px;
            min-width: 156px;
            height: 156px;`
        )}
    }

    & .hotel__title {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${baseTheme.colors.generalBlue};
        text-align: start;

        ${mediaMax(baseTheme.media.medium,
            `margin-bottom: 12px;
            ${getFontsFragment('md')}`
        )}

        ${mediaMax(baseTheme.media.small,
            `margin-bottom: 12px;
            ${getFontsFragment('xs')}`
        )}
    }

    & .hotel__subtitle {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${baseTheme.colors.secondaryText};
        text-align: start;

        ${mediaMax(baseTheme.media.medium,
            `margin-bottom: 0;
            ${getFontsFragment('md')}`
        )}

        ${mediaMax(baseTheme.media.small,
            `${getFontsFragment('xs')}`
        )}
    }
`