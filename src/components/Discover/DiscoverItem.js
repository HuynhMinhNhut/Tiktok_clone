import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({ icon, title }) {
    return (
        <div className={cx('discover-item')}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

DiscoverItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default DiscoverItem;
