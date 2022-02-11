
<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          v-model="form.title"
        />
      </div>
      <div class="form-group">
        <label for="nbHoursForecast">nbHoursForecast</label>
        <input
          type="text"
          class="form-control"
          id="nbHoursForecast"
          placeholder="nbHoursForecast"
          v-model="form.nbHoursForecast"
        />
      </div>
      <div class="form-group">
        <label for="nbHoursReal">nbHoursReal</label>
        <input
          type="text"
          class="form-control"
          id="nbHoursReal"
          placeholder="nbHoursReal"
          v-model="form.nbHoursReal"
        />
      </div>

      <div class="form-group">
        <label for="developers">Developers</label>
        <div v-for="developer in developers" :key="developer.lastname">
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">{{ developer.lastname }}</label>
        </div>
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <div v-for="type in taskType" :key="type.label">
          <input type="checkbox" id="type" name="type" checked />
          <label for="type">{{ type.label }}</label>
        </div>
      </div>
      <!--div class="form-group">
        <label for="type">type</label>
        <input
          type="text"
          class="form-control"
          id="type"
          placeholder="type"
          v-model="form.type"
        />
      </div-->
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>

    <!--h2>Contact US</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Your name"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="form.email"
        />
      </div>
      <div class="form-group">
        <label for="formControlRange">Gender</label><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender-male"
            value="male"
            v-model="form.gender"
          />
          <label class="form-check-label" for="gender">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender-female"
            value="female"
            v-model="form.gender"
          />
          <label class="form-check-label" for="gender">Female</label>
        </div>
      </div>
      <div class="form-group">
        <label for="refer">From where did you hear about us?</label>
        <select
          name="refer"
          class="form-control"
          id="refre"
          v-model="form.refer"
        >
          <option value="website">Website</option>
          <option value="newspaper">Newspaper</option>
          <option value="friend">Friend</option>
          <option value="online-ad">Online Ad</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">You are a : </label>
        <select
          multiple
          class="form-control"
          id="exampleFormControlSelect2"
          v-model="form.profession"
        >
          <option value="developer">Developer</option>
          <option value="designer">Graphic Designer</option>
          <option value="manager">Manager</option>
          <option value="ceo">Company Head / CEO</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="formControlRange"
          >Which of our service are you interested in?</label
        ><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="online"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox1"
            >Online Tests</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="paper"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox2"
            >Paper Based Tests</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="customized"
            v-model="form.interested"
          />
          <label class="form-check-label" for="inlineCheckbox3"
            >Customized Tests</label
          >
        </div>
      </div>
      <div class="form-group">
        <label for="message">Your message</label>
        <textarea
          name="message"
          class="form-control"
          id="message"
          rows="3"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="satisfaction"
          >How satisfied are you with our service?</label
        >
        <input
          type="range"
          name="satisfaction"
          class="form-control-range"
          id="formControlRange"
          min="0"
          max="10"
          v-model="form.satisfaction"
        />
      </div>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="terms"
            value="yes"
            v-model="form.terms"
          />
          <label class="form-check-label" for="inlineCheckbox3"
            >Agree to Terms & Conditions</label
          >
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form-->
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        title: "",
        nbHoursForecast: "",
        nbHoursReal: "",
        developers: [
          {
            id: 3,
            firstname: "Pierre-Jean",
            lastname: "Drevet",
            email: "pierre-jean.drevet@gmail.com",
          },
        ],
        type: {
          id: 2,
          label: "FEATURE",
        },
      },
    };
  },
  computed: {
    taskType() {
      return this.$store.state.taskType;
    },
    tasks() {
      return this.$store.state.tasks;
    },
    developers() {
      return this.$store.state.developers;
    },
  },
  mounted() {
    this.$store.dispatch("getTaskType");
    this.$store.dispatch("getTasks");
    this.$store.dispatch("getDevelopers");
  },
  methods: {
    submitForm() {
      console.log(this.form);
      axios
        .post("http://localhost:8080/tasks", this.form)
        .then((res) => {
          //Perform Success Action
          console.log("res:" + res);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log("error:" + error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>