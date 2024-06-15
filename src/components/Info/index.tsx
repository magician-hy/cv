import { PersonalInfo } from '../../types';
import './index.less';

type Props = {
  info: PersonalInfo;
};

export default function Info(props: Props) {
  const {
    name,
    gender,
    age,
    position,
    workingYears,
    phoneNumber,
    email,
    picture,
    github,
    blog,
  } = props.info;

  return (
    <div className="info-wrapper">
      <div className="info">
        <div className="name">{name}</div>
        <div className="info-item">
          <div>{gender}</div>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <div className="mt-1">{age}&nbsp;</div>岁
        </div>
        <div className="info-item">
          <div>{position}</div>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <div className="mt-1">{workingYears}&nbsp;</div>年
        </div>
        <div className="info-item contact">
          <div className="flex-align-center">
            <div>电话：</div>
            <a href={`tel:${phoneNumber}`} className="none mt-1">
              {phoneNumber}
            </a>
          </div>
          <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
          <div className="flex-align-center">
            <div>邮箱：</div>
            <a href={`mailto:${email}`} className="none mt-1">
              {email}
            </a>
          </div>
        </div>
        <div className="social-link">
          <div className="icon-wrapper">
            <img src="/github.svg" alt="GitHub" />
            <a href={`${github}`}>GitHub</a>：{github?.replace('https://', '')}
          </div>
        </div>
        <div className="social-link">
          <div className="icon-wrapper">
            <img src="/zeabur.svg" alt="GitHub" />
            <a href={`${blog}`}>个人网站</a>：{blog?.replace('https://', '')}
          </div>
        </div>
      </div>
      <div>
        <img src={picture} alt="照片" width="100" />
      </div>
    </div>
  );
}
