import ConsoleHelper from "./ConsoleHelper";
import HeroClassifier from "./HeroClassifier";

(async () => {

    const heroName = await ConsoleHelper.AskQuestion("What is your hero name? ");
    const xpAmount = await ConsoleHelper.AskQuestion("How much xp your hero have? ");

    const xp = parseInt(xpAmount)

    if(Number.isNaN(xp))
    {
        console.log(`The xp need to be an valid number, ${xpAmount} isn't a valid number.`);
        return;
    }

    const heroLevel = HeroClassifier.ClassifyHeroLevel(xp);

    console.log(`The hero ${heroName} is classified as ${heroLevel.toString()} Level!`);
})();