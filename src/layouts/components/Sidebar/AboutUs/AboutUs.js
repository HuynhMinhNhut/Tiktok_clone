import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <Button outline className={cx('about-btn')}>
                Create effects
            </Button>
            <div className={cx('content')}>
                <div className={cx('abouts')}>
                    <Link to={'https://www.tiktok.com/about?lang=en'}>About</Link>
                    <Link to={'https://newsroom.tiktok.com/vi-vn/'}>Newsroom</Link>
                    <Link to={'https://www.tiktok.com/about/contact?lang=en'}>Contact</Link>
                    <Link to={'https://careers.tiktok.com/'}>Careers</Link>
                    <Link to={'https://www.bytedance.com/'}>ByteDance</Link>
                </div>
                <div className={cx('rules')}>
                    <Link to={'https://www.tiktok.com/forgood'}>TikTok for Good</Link>
                    <Link
                        to={
                            'https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1'
                        }
                    >
                        Advertise
                    </Link>
                    <Link to={'https://developers.tiktok.com/?refer=tiktok_web'}>Developers</Link>
                    <Link to={'https://www.tiktok.com/transparency?lang=en'}>Transparency</Link>
                    <Link to={'https://www.tiktok.com/tiktok-rewards/eligibility/'}>TikTok Rewards</Link>
                    <Link to={'https://www.tiktok.com/browse'}>TikTok Browse</Link>
                    <Link to={'https://www.tiktok.com/embed'}>TikTok Embeds</Link>
                </div>
                <div className={cx('helps')}>
                    <Link to={'https://support.tiktok.com/en'}>Help</Link>
                    <Link to={'https://www.tiktok.com/safety/en/'}>Safety</Link>
                    <Link to={'https://www.tiktok.com/legal/page/row/terms-of-service/en'}>Terms</Link>
                    <Link to={'https://www.tiktok.com/legal/page/row/privacy-policy/en'}>Privacy</Link>
                    <Link to={'https://www.tiktok.com/creators/creator-portal/en-us/'}>Creator Portal</Link>
                    <Link to={'https://www.tiktok.com/community-guidelines?lang=en'}>Community Guidelines</Link>
                </div>
            </div>
            <span className={cx('copyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default AboutUs;
