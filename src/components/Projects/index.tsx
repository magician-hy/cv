import { Project } from '../../types';
import './index.less';

type Props = {
  projects: Project[];
};

export default function Projects(props: Props) {
  const { projects } = props;

  return (
    <div className="projects page2">
      <h2>项目经验</h2>
      {projects.map((project, index) => (
        // 根据排版决定是否添加 page2 类名
        <div key={index} className={`project ${index != 0 && index % 2 === 0 ? 'page2' : ''}`}>
          <div className="icon-wrapper">
            <img src={project.icon} />
            <div className="fs-17 font-bold">{project.name}</div>
          </div>
          <div className="project-content">
            <div className="project-detail">
              <div className="project-detail-title">项目介绍</div>
              <div className="project-detail-content">{project.description}</div>
            </div>
            <div className="project-detail">
              <div className="project-detail-title">技术栈</div>
              <div className="project-detail-stack">
                {project.stack.map((item, index) => {
                  return (
                    <div key={index} className="project-detail-stack-item">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-detail">
              <div className="project-detail-title">项目职责</div>
              <ul>
                {project.details.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
