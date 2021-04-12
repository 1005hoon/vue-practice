function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
    };
  },
  methods: {
    attackMonster() {
      this.round++;
      const dmg = getRandomValue(5, 12);
      this.monsterHealth -= dmg;
      this.attackPlayer();
    },
    attackPlayer() {
      const dmg = getRandomValue(8, 15);
      this.playerHealth -= dmg;
    },
    specialAttackMonster() {
      this.round++;
      const dmg = getRandomValue(10, 25);
      this.monsterHealth -= dmg;
      this.attackPlayer();
    },
  },
  computed: {
    playerHealthbarStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthbarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    canUseSpecial() {
      if (this.round === 0) return true;
      return this.round % 3 !== 0;
    },
  },
});

app.mount("#game");
