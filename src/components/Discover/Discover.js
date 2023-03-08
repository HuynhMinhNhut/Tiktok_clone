import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

import DiscoverItem from './DiscoverItem';
import { TagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Discover</p>
            <div className={cx('discover-list')}>
                <DiscoverItem icon={<TagIcon />} title={'suthatla'} />
                <DiscoverItem icon={<MusicIcon />} title={'Ngủ Một Mình'} />
                <DiscoverItem icon={<MusicIcon />} title={'Thiên Thần Tình Yêu - RICKY STAR'} />
                <DiscoverItem
                    icon={<MusicIcon />}
                    title={'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia'}
                />
                <DiscoverItem icon={<TagIcon />} title={'sansangthaydoi'} />
                <DiscoverItem icon={<TagIcon />} title={'dinhhuong'} />
                <DiscoverItem icon={<MusicIcon />} title={'Chúng Ta Của Hiện Tại - Sơn Tùng MTP'} />
                <DiscoverItem icon={<MusicIcon />} title={'If You - BigBang'} />
            </div>
        </div>
    );
}

export default Discover;
