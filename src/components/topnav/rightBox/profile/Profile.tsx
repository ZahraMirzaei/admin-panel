import { images } from "../../../../constants";
import classes from "./Profile.module.scss";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}>
        <img src={images.avt} alt="avatar" />
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__userName}>{t("zahraMirzaei")}</p>
        {/* <span className={classes.profile__role}>{t("admin")}</span> */}
      </div>
    </div>
  );
}

export default Profile;
