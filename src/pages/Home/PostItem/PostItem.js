import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import ReactPlayer from 'react-player';
import { faCheckCircle, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MusicIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function PostItem({ follow }) {
    return (
        <div className={cx('post-item')}>
            <div className={cx('post-info')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f371b8138dbf8b266e764b82deb73e78~c5_720x720.jpeg?x-expires=1677337200&x-signature=upqW%2FcUygsdOjieAS5pMdmkZnFE%3D"
                    alt="logo"
                />

                <div className={cx('item-info')}>
                    <div className={cx('nickname')}>
                        <strong>huynhminhnhut</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        <span className={cx('name')}>Huynh Minh Nhut</span>
                    </div>
                    <p className={cx('desc')}>
                        BIGBANG - '봄여름가을겨울 (Still Life)' M/V ~{' '}
                        <strong>#guitar #fyp #guitartok #music #guitarlesson #guitartutorial #cover #love</strong>
                    </p>
                    <span className={cx('sound')}>
                        <MusicIcon className={cx('sound-icon')} />
                        <Link to={'/'}>Still Life - BigBang</Link>
                    </span>
                </div>
                {follow && (
                    <Button outline className={cx('follow-btn')}>
                        Follow
                    </Button>
                )}
            </div>
            <div className={cx('video-side')}>
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=eN5mG_yMDiM'}
                    width="340px"
                    height="600px"
                    playing={true}
                    controls={true}
                />
                <div className={cx('interact')}>
                    <div className={cx('box-icon')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faHeart} />
                    </div>
                    <div className={cx('value')}>245.8K</div>
                    <div className={cx('box-icon')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faCommentDots} />
                    </div>
                    <div className={cx('value')}>2134</div>
                    <div className={cx('box-icon')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faShare} />
                    </div>
                    <div className={cx('value')}>1027</div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
