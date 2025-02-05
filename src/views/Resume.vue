<template>
  <!-- Resume Subpage -->
  <section data-id="resume" class="animated-section">
    <div class="page-title">
      <h2>Resume</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-12 col-sm-7 mb-4">
          <div class="block-title">
            <h3>Experience</h3>
          </div>

          <div class="timeline timeline-second-style clearfix">
            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2022 - 2025</h5>
                <a href="https://bigfishgames.com/us/en/pc-games.html" class="item-company">BigFish
                  Games (US Company)<font-awesome-icon icon="external-link-alt" /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Senior Game Engineer</h4>
                <p class="">
                  <ul>
                    <li>
                      Developed an immersive hidden object game optimized for tablet devices with sophisticated object
                  recognition algorithms
                    </li>
                    <li>
                      Engineered dynamic crafting system featuring interconnected item combinations and reward mechanisms
                    </li>
                    <li>
                      Implemented complex puzzle mechanics integrated with narrative progression
                    </li>
                    <li>
                      Created adaptive difficulty scaling system for hidden object challenges
                    </li>
                    <li>
                      Conducted thorough code reviews, facilitated sprint planning, and provided mentorship to junior
                  developers, fostering a collaborative, innovative, and high-performing development team.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2018 - 2022</h5>
                <a href="https://peak.com/" target="_blank" class="item-company">Peak Games <font-awesome-icon
                    icon="external-link-alt" /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Mid-Level Game Developer</h4>
                <p class="">
                  <ul>
                    <li>
                      Architected match-3 puzzle game mechanics with complex combo systems and level progression
                    </li>
                    <li>
                      Improved user engagement by 30% by developing character-driven narrative elements with interactive animated protagonists
                    </li>
                    <li>
                      Implemented sophisticated puzzle-solving algorithms and scoring mechanisms
                    </li>
                    <li>
                      Created modular level design system supporting continuous content expansion
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2016 - 2018</h5>
                <a href="https://kaikai.games/" target="_blank" class="item-company">KaiKai
                  <font-awesome-icon icon="external-link-alt" /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Unity Game AR Developer</h4>
                <p class="">
                  <ul>
                    <li>
                      Increased user engagement by 20% by developing augmented reality target practice app with mobile camera integration
                    </li>
                    <li>
                      Increased system accuracy by 15% by developing physics-based projectile systems with varied trajectory calculations
                    </li>
                    <li>
                      Implemented progressive difficulty scaling and dynamic obstacle generation
                    </li>
                    <li>
                      Created achievement system with unlockable content based on player performance metrics
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            
          </div>

          <div class="white-space-50"></div>

          <div class="block-title">
            <h3>Education</h3>
          </div>

          <div class="timeline timeline-second-style clearfix">
            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2012 - 2015</h5>
                <a href="https://www.ufl.edu/" class="item-company">University of Florida <font-awesome-icon icon="external-link-alt" /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Bachelor Degree of Computer Science</h4>
              </div>
            </div>            
          </div>

          <div class="white-space-50"></div>

          <!-- Knowledges -->
          <div class="block-title">
            <h3>Knowledge & Others</h3>
          </div>

          <ul class="knowledges">
            <li>Figma UI/UX</li>
            <li>Unity & 3D Modeling Tools</li>
            <li>Project managment with Trello, Jira & CLickUp</li>
            <li>SEO</li>
            <li>System Conception</li>
            <li>Team player</li>
            <li>Code testing</li>
          </ul>
          <!-- End of Knowledges -->
        </div>

        <!-- Skills & Certificates -->
        <div class="col-12 col-sm-5">
          <!-- Coding Skills -->
          <div class="block-title">
            <h3>
              Programming
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill v-for="(item, index) in skills" :key="index" :title="item.title"
              :percentage="parseInt(item.percentage)"></Skill>
          </div>
          <!-- End of Coding Skills -->

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Game Development
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="Unity/Unreal/Game Engine" :percentage="90"></Skill>
            <Skill title="Roblox & VR/AR Development" :percentage="85"></Skill>
            <Skill title="Multiplayer Systems" :percentage="95"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Graphics and Visual Arts
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="Graphic Design" :percentage="95"></Skill>
            <Skill title="Animation" :percentage="90"></Skill>
            <Skill title="Concept Art" :percentage="93"></Skill>
            <Skill title="3D Modeling" :percentage="87"></Skill>
            <Skill title="Shader Development" :percentage="97"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Game Design
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="Game Mechanics Design" :percentage="90"></Skill>
            <Skill title="Level Design" :percentage="80"></Skill>
            <Skill title="Gameplay Balancing" :percentage="85"></Skill>
            <Skill title="Procedural Generation" :percentage="93"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Technical
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="AI Development" :percentage="87"></Skill>
            <Skill title="Networking" :percentage="93"></Skill>
            <Skill title="Performance Optimization" :percentage="97"></Skill>
            <Skill title="Version Control" :percentage="95"></Skill>
            <Skill title="Software Architecture" :percentage="90"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Dev Methodologies
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="Agile Methodologies" :percentage="93"></Skill>
            <Skill title="Team Collaboration" :percentage="94"></Skill>
            <Skill title="Project Management" :percentage="82"></Skill>
            <Skill title="SDLC" :percentage="80"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Soft
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="Problem Solving" :percentage="91"></Skill>
            <Skill title="Documentation" :percentage="90"></Skill>
            <Skill title="Team Communication" :percentage="99"></Skill>
            <Skill title="Time Management" :percentage="95"></Skill>
            <Skill title="Adaptability" :percentage="82"></Skill>
          </div>

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              Language (Spoken & Written)
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="English" :percentage="95"></Skill>
            <Skill title="Vietnamese" :percentage="80"></Skill>
            <Skill title="Chinese" :percentage="90"></Skill>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- End of Resume Subpage -->
</template>

<script>
import { mapGetters } from "vuex";
import Skill from "../components/Skill";

export default {
  name: "Resume",
  components: {
    Skill,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      skills: 'author/getSkills'
    })
  },
  mounted() {
    document.title = '@Anh_ | Resume'
  },
};
</script>
