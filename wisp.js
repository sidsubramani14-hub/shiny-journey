class Wisp {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getAbility() {
    if (this.type === "tide") {
      return "Waveform Strike";
    }
    if (this.type === "ember") {
      return "Ember Surge";
    }
    if (this.type === "earth") {
      return "Seismic Strike";
    }
    if (this.type === "ghost") {
      return "Phase Strike";
    }
  }
}
