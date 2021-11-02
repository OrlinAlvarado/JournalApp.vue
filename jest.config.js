module.exports = {
  //TODO: Se comenta por que dan error las pruebas el OptionsAPI
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
