import classNames from 'classnames/bind';
import styles from './Following.module.scss';

import PostItem from '../Home/PostItem';

const cx = classNames.bind(styles);

function Following() {
    const follow = false;
    return (
        <div className={cx('wrapper')}>
            <PostItem follow={follow} />
            <PostItem follow={follow} />
            <PostItem follow={follow} />
            <PostItem follow={follow} />
            <PostItem follow={follow} />
        </div>
    );
}

export default Following;
