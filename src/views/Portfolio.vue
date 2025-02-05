<template>
	<!-- 404 Subpage -->
	<section id="portfolio" class="portfolio animated-section" ref="portfolio">
		<div class="section-content">
			<div class="page-title mb-0 pb-0">
				<h2>
					My
					<span>Works</span>
				</h2>
			</div>

			<DeveloperActivity class="mt-2 mb-5" />

			<div class="row">
				<div class="col-md-6 mb-4" v-for="(project, index) in projectList" :key="index">
					<div class="portfolio-card-wrapper">
						<div class="portfolio-card">
							<div class="portfolio-card-front"
								:style="project.coverImg ? `background-image: url(${project.coverImg});` : ''">

								<div class="image_overlay" />

								<div class="view_details btn-primary-custom">View details</div>
								<div class="stats-container">
									<h3 class="project-name">{{ project.label }}</h3>

									<div class="project-links">
										<div class="bar-separator"></div>
										<ul>
											<li v-if="project.liveDemoLink">
												<a :href="project.liveDemoLink" target="_blank" title="Live demo">
													<font-awesome-icon :icon="['fas', 'eye']" />
												</a>
											</li>
											<li v-if="project.repoLink">
												<a :href="project.repoLink" target="_blank" title="Github repo">
													<font-awesome-icon :icon="['fab', 'github']" />
												</a>
											</li>
										</ul>
									</div>
									<!-- /.project-links -->
								</div>
								<!-- /.stats-container -->
							</div>
							<!-- /.portfolio-card-front -->

							<div class="portfolio-card-back">
								<div class="description-wrapper">
									<h3 class="description-title">{{ project.label }}</h3>

									<div class="bar-separator"></div>
									<p class="description-content">
										<span v-if="project.description" v-html="project.description">
										</span>
										<template v-else> No description </template>
									</p>
								</div>

								<div class="footer">
									<a v-if="project.liveDemoLink" :href="project.liveDemoLink" class="mr-2" target="_blank"
										title="Live demo">
										<font-awesome-icon :icon="['fas', 'eye']" />
										Live demo
									</a>

									<a v-if="project.repoLink" :href="project.repoLink" target="_blank" title="Live demo">
										<font-awesome-icon :icon="['fab', 'github']" />
										Github repo
									</a>
									<div class="d-flex align-items-center" v-if="project.linkToShare">
										<font-awesome-icon :icon="['fas', 'share-alt']" class="mr-2" />
										<a :href="`https://www.linkedin.com/shareArticle
												?mini=true
												&url=${project.linkToShare}
												&title=Share my work on Linkedin
												&summary=I share with you this project which interested me a lot!
												&source=Nathan Mandemvo`" target="_blank" class="mr-2">
											<font-awesome-icon :icon="['fab', 'linkedin']" />
											Linkedin</a>
										<a :href="`https://twitter.com/intent/tweet
												?url=${project.linkToShare}
												&title=Share my work on Twitter
												&text=I share with you this project which interested me a lot!
												&hashtags=nathanMandemvo,${project.hashtags}`" target="_blank" class="mr-2">
											<font-awesome-icon :icon="['fab', 'twitter']" />
											Twitter</a>
									</div>
								</div>

								<div class="flip-back">
									<div class="cy"></div>
									<div class="cx"></div>
								</div>
							</div>
							<!-- /.portfolio-card-back -->
						</div>
						<!-- /.portfolio-card -->
					</div>
					<!-- /.portfolio-card-wrapper -->
				</div>
				<!-- /.col-sm-6 -->
			</div>
			<!-- /.row -->
		</div>
		<!-- /.section-content -->
	</section>
	<!-- /.portfolio -->
</template>

<script>
// HELPERS
import animatePortfolioCard from "../assets/js/animatePortfolioCard";

// COMPONENTS
import DeveloperActivity from "../components/DeveloppeurActivity";

// IMGS
const _TheDashImg = require('../assets/img/projects/_TheDash.png');
const everDemandImg = require('../assets/img/projects/everDemand.png');
const juriDOcsImg = require('../assets/img/projects/juridocs.png');
const keeanoImg = require('../assets/img/projects/keeano.png');
const listItImg = require('../assets/img/projects/listIt.png');
const nslMeImg = require('../assets/img/projects/nsl-me.png');
const rdccovid19Img = require('../assets/img/projects/rdccovid19.png');
const rnaImg = require('../assets/img/projects/rna.png');
const shefaImg = require('../assets/img/projects/shefa.png');
const techCongoImg = require('../assets/img/projects/techCongo.png');
const virtualclassImg = require('../assets/img/projects/virtualclass.png');
const midnightCastle = require('../assets/img/projects/Mysteries.webp');
const ToonBlast = require('../assets/img/projects/ToonBlast.webp');
const ARTarget = require('../assets/img/projects/ARTarget.webp');


export default {
	components: {
		DeveloperActivity,
	},
	data() {
		return {
			projectList: [
				{
					label: "Midnight Castle",
					description: `
						A sophisticated tablet-optimized application built on Unity Engine with advanced computer vision algorithms for precise object recognition.
					`,
					coverImg: midnightCastle,
					liveDemoLink: "https://play.google.com/store/apps/details?id=com.bigfishgames.mcgooglef2p&hl=en",
				},
				{
					label: "Toon Blast",
					description: `
						Built with Unity's DOTS (Data-Oriented Technology Stack) architecture for optimal performance in match-3 mechanics. The core system utilizes custom-developed grid management algorithms with efficient memory allocation and cache optimization.
					`,
					coverImg: ToonBlast,
					liveDemoLink: "https://play.google.com/store/apps/details?id=net.peakgames.toonblast&hl=en",
				},
				{
					label: "AR Shooter - Target",
					description: `
						Developed using Unity's AR Foundation framework with custom SLAM (Simultaneous Localization And Mapping) implementation for precise spatial tracking. Features sophisticated physics simulation using custom-modified PhysX integration for accurate projectile trajectories accounting for environmental factors. 
					`,
					coverImg: ARTarget,
					liveDemoLink: "https://play.google.com/store/apps/details?id=com.kaikai.arshooter&hl=en",
				},
			],
		};
	},
	mounted() {
		setTimeout(() => {
			const domPortfolioCards = window.document.querySelectorAll(
				"#portfolio .portfolio-card"
			);
			domPortfolioCards.forEach((portFolioCard) => {
				animatePortfolioCard(portFolioCard);
			});
		}, 1000);
		document.title = '@Anh_ | Works'
	},
};
</script>
