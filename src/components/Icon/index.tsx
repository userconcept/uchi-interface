import { ReactComponent as IconArrowDown } from '../../assets/images/icons/icon_arrow_down.svg';
import { ReactComponent as IconMorning } from '../../assets/images/icons/icon_morning.svg';
import { ReactComponent as IconDay } from '../../assets/images/icons/icon_day.svg';
import { ReactComponent as IconEvening } from '../../assets/images/icons/icon_evening.svg';

import { IconWrapper } from './styles';

const iconMap: any = {
    arrow_down: IconArrowDown,
    morning: IconMorning,
    day: IconDay,
    evening: IconEvening,
};

interface Props {
    name: string;
    csswidth: string;
    cssheight: string;
    color: string;
    onClick?: () => void;
}

function Icon({ name, csswidth, cssheight, color, onClick }: Props) {
    return (
        <IconWrapper
            onClick={onClick}
            as={iconMap[name]}
            $csswidth={csswidth}
            $cssheight={cssheight}
            $fill={color}
        />
    );
}

export default Icon;
