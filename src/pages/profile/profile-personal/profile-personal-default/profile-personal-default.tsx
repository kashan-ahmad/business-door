import { PersonalInfoProps, getPersonalInfo, openURL } from "..";
import { Menu, Icon } from "../../../../components";
import { hasEmptyIndex } from "../../../../helpers";

function ProfilePersonalDefault(props: PersonalInfoProps) {
  return (
    <Menu title="Personal Information">
      {getPersonalInfo(props).map((info, i) => {
        return hasEmptyIndex(info.labels) ? null : (
          <Menu.Item
            key={i}
            direction="row"
            onClick={() => openURL(info.href)}
            data-linked={info.href !== undefined}
            tabIndex={info.href === undefined ? -1 : 0}
          >
            <div className="menu__text-underlined">
              <Icon src={info.icon} size="small" />
            </div>
            <div className="menu__text text-ellipsis-1">
              <div className="text-paragraph text-bold">{info.title}</div>
              {info?.labels?.join(", ")}
            </div>
            {info.rightNodes && info.rightNodes}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default ProfilePersonalDefault;
