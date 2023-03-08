import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import PostItem from './PostItem';

const cx = classNames.bind(styles);

function Home() {
    const follow = true;
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

export default Home;
