import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f371b8138dbf8b266e764b82deb73e78~c5_720x720.jpeg?x-expires=1676991600&x-signature=tGBXJnJ97XIRQ0l6%2BjV%2FFQHHcPA%3D"
                    alt="logo"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>huynhminhnhut</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Huynh Minh Nhut</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>100.0M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>782.0M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
