enum HeroLevel
{
    Iron = "Iron",
    Bronze = "Bronze",
    Silver = "Silver",
    Gold = "Gold",
    Platinum = "Platinum",
    Ascendant = "Ascendant",
    Immortal = "Immortal",
    Radiant = "Radiant"
}

export default class HeroClassifier
{
    private static _xpLevels: { minXP: number, maxXP: number, level: HeroLevel }[] = [
        { minXP: 0, maxXP: 1000, level: HeroLevel.Iron },
        { minXP: 1001, maxXP: 2000, level: HeroLevel.Bronze },
        { minXP: 2001, maxXP: 5000, level: HeroLevel.Silver },
        { minXP: 5001, maxXP: 7000, level: HeroLevel.Gold },
        { minXP: 7001, maxXP: 8000, level: HeroLevel.Platinum },
        { minXP: 8001, maxXP: 9000, level: HeroLevel.Ascendant },
        { minXP: 9001, maxXP: 10000, level: HeroLevel.Immortal },
        { minXP: 10001, maxXP: Infinity, level: HeroLevel.Radiant }
    ];

    public static ClassifyHeroLevel(xp : number) : HeroLevel
    {
        const heroLevel = this._xpLevels.find(range => xp >= range.minXP && xp <= range.maxXP)
        return heroLevel ? heroLevel.level : HeroLevel.Iron;
    }
}