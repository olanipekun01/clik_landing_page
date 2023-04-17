import React, { Component } from 'react'

export class Hero extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {_class: "card_wrapper"}
  }

  handleChange () {
    if (this.state._class === "card_wrapper") {
      this.setState({_class: "card_wrapper active"});
    } else {
      this.setState({_class: "card_wrapper"});
    }
  }

  render() {
    return (
      <main>
        <section className="first_section">
            <figure>
                <img src="./ss 1.png" alt="" className="ss_image" />
                <img src="./ddd 1.png" alt="" className="ddd_image" />
            </figure>
            <div className="right_div">
                <h4>Click with your</h4>
                <h1>Clique</h1>
                <button>GET STARTED</button>
                <figure>
                  <img src="./apple-app-store-travel-awards-globestamp-7 2.png" alt="" className="playstore" />
                  <img src="./apple-app-store-travel-awards-globestamp-7 3.png" alt="" className="appstore" />
                </figure>
            </div>
        </section>

        <section className="second_section">
          <img src="./logo 2.png" alt="" className="second_section_logo" />
          <hr />
          <h1>What is Clik?</h1>
          <hr className='last'/>
          <div className="text_content">
            <p>Welcome to Clik, the platform that helps you connect with the people you care about in a private and personal way. We know that traditional social media can be overwhelming, with strangers having access to your content and a never-ending stream of ads and suggested pages. That's why we've created a space where you can selectively share your life and experiences with a carefully curated group of friends and family.</p>
            <p>With Clik, you can create your own "Cliques" of trusted individuals and invite only those you choose to join. And when you post pictures and videos, you have the control to decide which Cliques to share them with. This means you can enjoy social media without the distractions and interference of outsiders.</p>
            <p>We hope you'll join us in redefining social media as a place for genuine connections and meaningful interactions. Thank you for choosing Clik.</p>
          </div>
        </section>
        <hr className='horizontal_line'/>
        <section className="third_section">
          <h1>We Heard Your Pain Points and are Bringing a Solution</h1>
          <div className={this.state._class}>
            <div className="inner_wrapper">
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
              <div className="card">
                <img src="./Picture11 1.png" alt="" />
              </div>
            </div>
           </div>
           <img src="./Ellipse 2.png" onClick={this.handleChange} alt="" className="arrow_button" id="arrowButton" />
          </section>

          <section className="fourth_section">
            <figure>
              <img className='iphone_mockup_image' src="./iPhone 12 Mockup 1.png" alt="" />
              <img className='rectangle_image' src="./Rectangle 33.png" alt="" />
            </figure>

            <div className="right_side">
              <div className="content">
                <p>Clik is for <span className='everyone'>Everyone</span> <span className='yes_span'>Yes, you in particular!</span></p>
              </div>

              <div className="card_wrapper">
                <div className="first_column">
                  <div className="card">
                    <h4>I always try to take social media breaks but end up coming back</h4>
                    <p>I’ve tried so many times to delete my social media apps for my mental health but I somehow end up going back there-</p>
                  </div>
                </div>
                <div className="second_column">
                  <div className="card">
                    <h4>I love preserving memories</h4>
                    <p>The only reason I upload on social media is to preserve memories that I want to look back to someday, but the fear of oversharing holds me back from fully capturing and sharing my experiences</p>
                  </div>

                  <div className="card">
                    <h4>I’m a Public Figure/Celebrity</h4>
                    <p>Due to the nature of my profession, I have to put myself out there so brands can notice me but there are some aspects of my life I will like to share with only those I trust-</p>
                  </div>
                </div>
                <div className="third_column">
                  <div className="card">
                    <h4>I’m a private person</h4>
                    <p>I hate putting my life out there on social media, I feel uncomfortable sharing my pictures/videos on a platform where strangers can access, I need a closed space where I can share important things with the people I love and trust</p>
                  </div>
                  <div className="card">
                    <h4>I lost a loved one, I wish I took a picture/video of them</h4>

                    <p>Everyday I regret not taking a picture or making a video of my loved one while they were alive. Now I have nothing to hold on to or show to my unborn children-</p>
                  </div> 
                </div>
              </div>
            </div>
          </section>
          <section className="fifth_section">
            <div className="content">
              <p>With Clik, you are able to <span>selectively share your thoughts and experiences with a carefully curated group</span> of friends and family, free from the interference of strangers.</p>

              <p>Our platform <span>gives you complete control</span> over who has access to your content, allowing you to capture and share any memory you deem important without fear of oversharing or compromising your privacy.</p>

              <p>At Clik, we understand the human need to stay connected to others, but we also recognize the importance of protecting our mental health. That's why we offer a <span>filtered gateway to social media</span>, giving you access to only the things that make you feel safe and happy</p>

            </div>
          </section>
          <hr className='horizontal_line'/>
          <section className="sixth_section">
            <h1>Key Features</h1>

            <div className="main_content">
              <div className="left_side">
                <div className="data_privacy_wrapper">
                  <img src="./Ellipse 3.png" alt="" />
                  <p><span>Your data and privacy is our priority</span> - Every content you share on our platform is safe and only accessible to you and those you choose to share it with. Your chats are also end-to-end encrypted, ensuring that no one outside of your conversations can read them, not even us. We never use or store your personal information, meaning it cannot be sold to marketing or advertising companies</p>
                </div>
                
                <div className="question_bank">
                  <h1>Question Bank</h1>
                  <img src="./Question Bank Categories 1.png" alt="" />
                  <p>We believe that getting to know each other is an important aspect of building relationships. That's why we have curated a selection of engaging questions covering various aspects of personal life and career, giving group members the opportunity to discover more about each other. As the owner of your content, you have the power to choose which members have access to your answers. This allows you to control the level of personal information you share, while still fostering meaningful connections with others</p>
                </div>
                <hr className='sixth_line'/>
                <div className="memory_organizer">
                  <h1>Memory Organizer</h1>
                  <img src="./Personal Profile Filter Date 1.png" alt="" />
                  <p>Clik organizes your memories by days, months, and years, making it easy to access and reminisce about past experiences. And with a visually pleasing interface, you can enjoy revisiting your memories even more</p>
                </div>
              </div>
              <hr/>
              <div className="right_side">
              <hr className='sixth_line'/>
                <div className="no_ads_wrapper">
                    <img src="./Ellipse 3.png" alt="" />
                    <p><span>No Ads on the platform</span> - Clik is a closed platform free from external interference, including ads. This means you can enjoy an ad-free experience, free from the distractions and intrusions of targeted ads and suggested pages and profiles</p>
                </div>
                <hr className='sixth_line'/>
                <div className="your_clik">
                  <h1>Your Clik, Your Choice</h1>
                  <p> We have implemented a strict policy of "No Invitation, No Entry." This means that you are in full control of the people and groups that can access your personal information and pictures.</p>
                </div>
                <hr className='sixth_line'/>
                <div className="filtered_social">
                  <h1>Filtered Social media</h1>
                  <img src="./Stay COnnected 1.png" alt="" />
                  <p> Clik provides an alternative route to accessing traditional social media platforms, enabling you to curate the content you wish to view. This allows you to reap the benefits of social media without being subject to distractions and disruptions.</p>
                </div>
                <hr className='sixth_line'/>
                <div className="increased_authencity">
                  <h1>Increased authenticity</h1>
                  <p>Without the pressure to present a perfect image to the world, Clik helps you feel more comfortable being yourself and sharing more authentic content</p>
                </div>
              </div>
            </div>
          </section>
          <section className="seventh_section">
            <h1>Join Our Community</h1>
            <h5>Notify me when it launches</h5>
            <fieldset>
              <input type="email" placeholder='Type your email'/>
              <button>Notify</button>
            </fieldset>
          </section>
      </main>
    )
  }
}

export default Hero;