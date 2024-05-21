import { PersonalSkill } from '../../types';
import './index.less';

type Props = {
  skills: PersonalSkill;
};

export default function Skills(props: Props) {
  const { icons = [], descriptions = [] } = props.skills;

  return (
    <div className="skill">
      <h2>掌握技能</h2>
      {icons.length > 0 && (
        <div className="skill-icons">
          {icons.map((icon, index) => (
            <img key={index} src={icon} className="skill-icon" />
          ))}
        </div>
      )}
      {descriptions.length > 0 && (
        <ul>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
