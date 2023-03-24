import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1679842800&x-signature=Y%2FoqJL8L8FgKWU7WV4RBRYr%2F3EY%3D" alt="Đỗ Cao Long" />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Đỗ Cao Long</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Đỗ Cao Long</span>
            </div>
        </div>
    );
}

export default AccountItem;