<template>
  <div class="content px-5 pt-3">
    <div class="row align-items-center pb-3">
      <div class="col-lg-6 col-xl-6 text-dark">
        <p class="h3 py-2">Edit and Delete Messages</p>
      </div>
      <div class="col-lg-6 col-xl-6 text-lg-right">
        <router-link to="/dashboard" tag="button" class="btn btn-custom btn-custom--alt">Users</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <td scope="col">#Id</td>
              <td scope="col">Message</td>
              <td scope="col">From</td>
              <td scope="col">Uploaded</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mssg in messages" :key="mssg.id">
              <td>{{ mssg.id }}</td>
              <td>{{ mssg.body }}</td>
              <td>{{ mssg.name }}</td>
              <td>{{mssg.created_at.slice(0, 10)}}</td>
              <td>
                <button v-b-modal.modal-update @click="showMssg(mssg.id)" class="btn btn-edit">Edit</button>&nbsp;
                <button @click="deleteMssg(mssg.id)" class="btn btn-edit">Del</button>
              </td>
            </tr>

            <!-- modal show mssg -->
            <b-modal id="modal-update" title="Update user" hide-footer>
              <form @submit.prevent="updateMssg" class="sign-form">
                <div class="form-group">
                  <input
                    v-model="message.name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    required
                  >
                  <input
                    v-model="message.body"
                    type="text"
                    name="message"
                    placeholder="Message"
                    class="form-control"
                    required
                  >
                </div>
                <b-button
                  type="submit"
                  class="mt-3"
                  block
                  @click="$bvModal.hide('modal-update')"
                >Update user</b-button>
              </form>
            </b-modal>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="row pt-3">
      <div class="col">
        <nav aria-label="Users display pagination">
          <ul class="pagination justify-content-center align-items-center">
            <li class="page-item">
              <button :disabled="!pages.prevPage" @click="getFirstPage" class="page-link">First</button>
            </li>
            <li class="page-item">
              <button :disabled="!pages.prevPage" @click="getPrevPage" class="page-link">Prev</button>
            </li>
            <li class="page-item">
              <button
                :disabled="!pages.prevPage"
                @click="getPrevPage"
                class="page-link"
              >{{ pages.prevPage ? pages.currentPage - 1 : dots }}</button>
            </li>
            <li class="page-item">
              <button class="page-link current">{{ pages.currentPage }}</button>
            </li>
            <li class="page-item">
              <button
                :disabled="!pages.nextPage"
                @click="getNextPage"
                class="page-link"
              >{{ pages.nextPage ? pages.currentPage + 1 : dots }}</button>
            </li>
            <li class="page-item">
              <button :disabled="!pages.nextPage" @click="getNextPage" class="page-link">Next</button>
            </li>
            <li class="page-item">
              <button :disabled="!pages.nextPage" @click="getLastPage" class="page-link">Last</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      modalShow: true,
      proxy: "https://cors-anywhere.herokuapp.com/",
      url: "http://comtrade.sytes.net/api/messages?page=1",
      messages: [],
      pages: {
        currentPage: null,
        lastPage: null,
        nextPage: null,
        prevPage: null,
        lastPageNo: null
      },
      message: {
        name: "",
        body: "",
        id: ""
      },
      dots: "..."
    };
  },
  methods: {
    getFirstPage() {
      axios
        .get(this.proxy + this.url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
          const data = res.data.data;
          this.messages = data.data;
          this.pages.currentPage = data.current_page;
          this.pages.lastPage = data.last_page_url;
          this.pages.nextPage = data.next_page_url;
          this.pages.prevPage = data.prev_page_url;
          this.pages.lastPageNo = data.last_page;
        })
        .catch(e => console.log(e));
    },
    getLastPage() {
      axios
        .get(this.proxy + this.pages.lastPage, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
          const data = res.data.data;
          this.messages = data.data;
          this.pages.currentPage = data.current_page;
          this.pages.nextPage = data.next_page_url;
          this.pages.prevPage = data.prev_page_url;
          this.pages.lastPageNo = data.last_page;
        })
        .catch(e => console.log(e));
    },
    getNextPage() {
      axios
        .get(this.proxy + this.pages.nextPage, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
          const data = res.data.data;
          this.messages = data.data;
          this.pages.currentPage = data.current_page;
          this.pages.nextPage = data.next_page_url;
          this.pages.prevPage = data.prev_page_url;
          this.pages.lastPageNo = data.last_page;
        })
        .catch(e => console.log(e));
    },
    getPrevPage() {
      axios
        .get(this.proxy + this.pages.prevPage, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
          const data = res.data.data;
          this.messages = data.data;
          this.pages.currentPage = data.current_page;
          this.pages.nextPage = data.next_page_url;
          this.pages.prevPage = data.prev_page_url;
          this.pages.lastPageNo = data.last_page;
        })
        .catch(e => console.log(e));
    },
    showMssg(id) {
      axios
        .get(`${this.proxy}http://comtrade.sytes.net/api/messages/${id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        })
        .then(res => {
          console.log(res);
          this.message.name = res.data.data.name;
          this.message.body = res.data.data.body;
          this.message.id = res.data.data.id;
        })
        .catch(e => console.log(e));
    },
    updateMssg() {
      axios
        .put(
          `${this.proxy}http://comtrade.sytes.net/api/messages/${
            this.message.id
          }`,
          { body: this.message.body },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          alert("Message updated");
          this.getFirstPage();
        })
        .catch(e => console.log(e));
    },
    deleteMssg(id) {
      let answer = confirm(
        "Are you sure that you want to delete this message? You can not get him back after this"
      );
      if (answer) {
        axios
          .delete(`${this.proxy}http://comtrade.sytes.net/api/messages/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          })
          .then(res => {
            console.log(res);
            alert(`Message with id of ${id} deleted!`);
            this.getFirstPage();
          })
          .catch(e => console.log(e));
      }
    }
  },
  created() {
    this.getFirstPage();
  }
};
</script>

<style>
</style>
