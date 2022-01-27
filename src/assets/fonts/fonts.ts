import { createGlobalStyle } from 'styled-components';

import PTRootUIEot from './PTRootUI-Regular.eot';
import PTRootUITtf from './PTRootUI-Regular.ttf';
import PTRootUIWoff from './PTRootUI-Regular.woff';
import PTRootUIWoff2 from './PTRootUI-Regular.woff2';
import SourceSansProEot from './SourceSansPro-SemiBold.eot';
import SourceSansProTtf from './SourceSansPro-SemiBold.ttf';
import SourceSansProWoff from './SourceSansPro-SemiBold.woff';
import SourceSansProWoff2 from './SourceSansPro-SemiBold.woff2';

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'PT Root UI';
        src: url(${PTRootUIEot});
        src: local('PT Root UI'), local('PTRootUI-Regular'),
            /* url('Inter-Regular.eot?#iefix') format('embedded-opentype'), */
            url(${PTRootUIWoff2}) format('woff2'),
            url(${PTRootUIWoff}) format('woff'),
            url(${PTRootUITtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: 'Source Sans Pro';
        src: url(${SourceSansProEot});
        src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'),
            /* url('Inter-Medium.eot?#iefix') format('embedded-opentype'), */
            url(${SourceSansProWoff2}) format('woff2'),
            url(${SourceSansProWoff}) format('woff'),
            url(${SourceSansProTtf}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: block;
    }
`;
