<<<<<<< HEAD
// This is an automatically generated file, created by auto-tester on Jun 13 2018, 8:48
=======
// This is an automatically generated file, created by auto-tester on Jun 11 2018, 10:45
>>>>>>> d58baf90cc9f754957cdc0f01a35572d222472ab

user = "highfidelity/";
repository = "hifi_tests/";
branch = "RC69/";

Test.wait(10000);

var repositoryPath = "https://github.com/" + user + repository + "blob/" + branch;
var autoTester = Script.require(repositoryPath + "tests/utils/autoTester.js?raw=true");

autoTester.enableRecursive();
autoTester.enableAuto();

Script.include(repositoryPath + "/tests/content/entity/zone/zoneOrientation/test.js?raw=true");
Script.include(repositoryPath + "/tests/content/entity/zone/create/test.js?raw=true");
Script.include(repositoryPath + "/tests/content/entity/zone/ambientLightZoneEffects/test.js?raw=true");
Script.include(repositoryPath + "/tests/content/entity/zone/ambientLightInheritance/test.js?raw=true");

autoTester.runRecursive();
