<template>
  <div class="content px-5 pt-3">
    <div class="row align-items-center pb-3">
      <div class="col-lg-6 col-xl-6 text-dark">
        <p class="h3 py-2">Upload, Edit and Delete Users</p>
      </div>
      <div class="col-lg-6 col-xl-6 text-lg-right">
        <button v-b-modal.modal-create class="btn btn-custom btn-custom--alt">Upload User</button>

        <!-- modal create user -->
        <b-modal id="modal-create" title="Create user" hide-footer>
          <form @submit.prevent="createUser" class="sign-form">
            <div class="form-group">
              <input
                v-model="create.name"
                type="text"
                name="name"
                placeholder="Name"
                class="form-control"
                required
              >
              <input
                v-model="create.email"
                type="email"
                name="email"
                placeholder="Email"
                class="form-control"
                required
              >
              <input
                v-model="create.password"
                type="password"
                name="password"
                placeholder="Password"
                class="form-control"
                required
              >
              <input
                v-model="create.confirm"
                type="password"
                name="confirm"
                placeholder="Confirm"
                class="form-control"
                required
              >
            </div>
            <b-button
              type="submit"
              class="mt-3"
              block
              @click="$bvModal.hide('modal-create')"
            >Create user</b-button>
          </form>
        </b-modal>

        <router-link
          to="/messages"
          tag="button"
          class="btn btn-custom btn-custom--alt ml-3"
        >Messages</router-link>
      </div>
    </div>
    <div></div>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <td scope="col">#Id</td>
              <td scope="col">User Name</td>
              <td scope="col">Email</td>
              <td scope="col">Uploaded</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{user.created_at.slice(0, 10)}}</td>
              <td>
                <button v-b-modal.modal-update @click="showUser(user.id)" class="btn btn-edit">Edit</button>&nbsp;
                <button @click="deleteUser(user.id)" class="btn btn-edit">Del</button>
              </td>
            </tr>

            <!-- modal show user -->
            <b-modal id="modal-update" title="Update user" hide-footer>
              <form @submit.prevent="updateUser" class="sign-form">
                <div class="form-group">
                  <input
                    v-model="user.name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    required
                  >
                  <input
                    v-model="user.email"
                    type="email"
                    name="email"
                    placeholder="Email"
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
      proxy: "https://cors-anywhere.herokuapp.com/",
      url: "http://comtrade.sytes.net/api/users?page=1",
      users: [],
      pages: {
        currentPage: null,
        lastPage: null,
        nextPage: null,
        prevPage: null,
        lastPageNo: null
      },
      create: {
        name: "",
        email: "",
        password: "",
        confirm: ""
      },
      user: {
        name: "",
        email: "",
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
          this.users = data.data;
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
          this.users = data.data;
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
          this.users = data.data;
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
          this.users = data.data;
          this.pages.currentPage = data.current_page;
          this.pages.nextPage = data.next_page_url;
          this.pages.prevPage = data.prev_page_url;
          this.pages.lastPageNo = data.last_page;
        })
        .catch(e => console.log(e));
    },
    createUser() {
      const userData = {
        name: this.create.name,
        email: this.create.email,
        password: this.create.password,
        password_confirmation: this.create.confirm
      };
      axios
        .post(
          this.proxy + "http://comtrade.sytes.net/api/auth/signup",
          userData
        )
        .then(res => {
          console.log(res);
          alert("User uccessfully created!");
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.status === 422) {
            alert("The email has already been taken.");
          } else {
            alert("Not valid data. Try again.");
          }
        });
    },
    showUser(id) {
      console.log(id);
      axios
        .get(`${this.proxy}http://comtrade.sytes.net/api/users/${id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        })
        .then(res => {
          console.log(res);
          this.user.name = res.data.data.name;
          this.user.email = res.data.data.email;
          this.user.id = res.data.data.id;
        })
        .catch(e => console.log(e));
    },
    updateUser() {
      axios
        .put(
          `${this.proxy}http://comtrade.sytes.net/api/users/${this.user.id}`,
          { name: this.user.name, email: this.user.email },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          alert("User updated");
          this.getFirstPage();
        })
        .catch(e => console.log(e));
    },
    deleteUser(id) {
      let answer = confirm(
        "Are you sure that you want to delete this user? You can not get him back after this"
      );
      if (answer) {
        axios
          .delete(`${this.proxy}http://comtrade.sytes.net/api/users/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          })
          .then(res => {
            console.log(res);
            alert(`User with id of ${id} deleted!`);
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

<style lang="scss">
.content {
  background: $white;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: $textColor;
}
.table td,
.table th {
  vertical-align: middle;
}

.btn.btn-edit {
  background: $altColor;
  color: $mainColor;
}
.modal {
  color: $textColor;
  .sign-form {
    .form-control {
      border: 1px solid $mainColor;
    }
  }
}
.page-item {
  cursor: pointer;
}
.page-item .page-link {
  color: $altColor;
  &:disabled {
    color: gray;
  }
}
.page-link.current {
  padding: 1rem 1.5rem;
  cursor: default;
}
</style>


