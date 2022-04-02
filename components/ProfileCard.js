import mainPhoto from '../public/images/lcE3stJ1cSE.jpg'
import gitLogo from '../public/images/github-icon.svg';
function ProfileCard() {
  return (

    <div className="profile_content">
      <div className="profile_card">
        <div className="firstinfo"><img src={mainPhoto['src']} />
          <div className="profileinfo">
            <h1>Alexander Koryakin</h1>
            <h3></h3>
            <p className="bio"><h5>PROGRAMMING SKILLS</h5><div>HTML/CSS</div>
              <div>ReactJS</div>
              <div>React Native</div>
              <div>JQ</div>
              <div>Redux</div>
              <div>C#</div>
              <div>design patterns</div>
            </p>
            <p className="bio"><h5> PROFESSIONAL SKILLS </h5>I am communicative, hardworking and responsible person</p>
          </div>
        </div>
      </div>
      <div className="badgescard"><a href="https://github.com/ITKory"><img src={gitLogo['src']} width="25px" alt='GitHub' /></a></div>
    </div>
  )
}
export default ProfileCard;