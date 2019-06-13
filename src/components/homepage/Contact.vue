<template>
  <section id="contact" class="py-5 contact">
    <div class="container">
      <h2 class="section-title">Say hello to us</h2>
      <p
        class="pb-5 section-lead"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua.</p>

      <form>
        <div class="row">
          <div class="col-md-5 col-lg-4 mx-3 mx-md-0 py-3 contact__info">
            <div class="media">
              <i class="fas fa-map-marker-alt"></i>
              <div class="media-body ml-3">
                <h5 class="mt-0 font-weight-bold">Location:</h5>
                <address>Admirala Geprata 14</address>
              </div>
            </div>
            <div class="media">
              <i class="fas fa-phone"></i>
              <div class="media-body ml-3">
                <h5 class="mt-0 font-weight-bold">Phone:</h5>
                <p>
                  <a href="tel:+1234321321">+1234321321</a>
                </p>
              </div>
            </div>
            <div class="media">
              <i class="fas fa-globe"></i>
              <div class="media-body ml-3">
                <h5 class="mt-0 font-weight-bold">Web:</h5>
                <p>
                  <a href="#" target="_blank" title="Visit website in new tab">websitename@mail.com</a>
                </p>
              </div>
            </div>
          </div>
          <!-- END Col-->

          <div class="col-md-7 col-lg-8 pt-3 pt-md-0 contact__form">
            <div class="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                class="form-control"
              >
            </div>
            <div class="form-group">
              <input type="text" id="email" placeholder="Email" required class="form-control">
            </div>
            <div class="form-group">
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message"
                required
                class="form-control"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 offset-md-5 col-lg-8 offset-lg-4 pt-3">
            <button type="submit" class="btn btn-contact">Send message</button>
          </div>
        </div>
      </form>
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.contact {
  background: $altBgColor;
  a {
    color: $textColor;
    &:hover {
      text-decoration: none;
    }
  }
  .section-title {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 3px;
      margin: 0 auto;
      bottom: 12px;
      left: 0;
      right: 0;
      width: 70px;
      background: #000;
    }
  }
  .media {
    .fas {
      padding-top: 5px;
    }
  }
}
.contact__info {
  background: $white;
}
.form-control {
  border-radius: 0;
  &:focus {
    border-color: $altColor;
    box-shadow: none;
  }
}
.btn-contact {
  background: $altColor;
  color: $white;
  border-radius: 0;
  text-transform: capitalize;
  font-weight: bold;
}
.contact__form {
  .form-group:last-child {
    margin-bottom: 0;
  }
}
</style>
