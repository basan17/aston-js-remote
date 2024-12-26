const obj = { item: "some value" };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);
logger.apply(obj);
const logsSomeValue = logger.bind(obj);
logsSomeValue();
