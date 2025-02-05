<template>
	<!-- Contact Subpage -->
	<section data-id="contact" class="animated-section">
		<div class="page-title">
			<h2>Contact</h2>
		</div>

		<div class="section-content">
			<!-- Contact Form -->
			<div class>
				<!--<div id="map" class="map"></div>-->
				<div class="block-title">
					<h3>
						How Can I
						<span>Help You?</span>
					</h3>
				</div>

				<form id="contact_form" @submit.prevent="sendEmail()">
					<div class="messages"></div>

					<div class="controls two-columns">
						<div class="fields clearfix">
							<div class="">

								<div class="form-group form-group-with-icon" :class="{ 'form-group-focus': form.subject }">
									<input id="form_subject" type="text" name="subject" class="form-control-custom" v-model="form.subject"
										required="required" data-error="Subject is required." />
									<label>Subject</label>
									<div class="form-control-custom-border"></div>
									<div class="help-block with-errors"></div>
								</div>

								<div class="form-group form-group-with-icon" :class="{ 'form-group-focus': form.message }">
									<textarea id="form_message" name="body" class="form-control-custom" v-model="form.body" rows="7"
										required="required" data-error="Please, leave me a message."></textarea>
									<label>Message</label>
									<div class="form-control-custom-border"></div>
									<div class="help-block with-errors"></div>
								</div>
							</div>
						</div>

						<div class="g-recaptcha">
							<vue-recaptcha theme="dark" sitekey="6Ldbps0qAAAAABx6XW6xnEsPbxqJg4xfsnqDND5D" :loadRecaptchaScript="true"
								@verify="form.isValidatedRecaptcha = true" @expired="form.isValidatedRecaptcha = false">
							</vue-recaptcha>
							<small v-if="!form.isValidatedRecaptcha" class="text-danger">Please validate the reCAPTCHA</small>
						</div>

						<input type="submit" class="button btn-send" value="Send message" />
					</div>
				</form>
			</div>
			<!-- End of Contact Form -->
		</div>
		<!-- /.section-content -->
	</section>
	<!-- End of Contact Subpage -->
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
	name: "Contact",
	components: { VueRecaptcha },
	data() {
		return {
			form: {
				fullName: null,
				email: null,
				subject: null,
				body: null,
				isValidatedRecaptcha: false
			},
		};
	},
	methods: {
		sendEmail() {
			if (this.form.isValidatedRecaptcha) {
				window.open(`mailto:nguyenngoc.anh5338@gmail.com?subject=${this.form.subject}&body=${this.form.body}`);
			} else {
				window.alert('Please, be sure to validate reCaptcha')
			}
		}
	},
	mounted() {
		document.title = '@Anh_ | Contact'
	},
};
</script>
