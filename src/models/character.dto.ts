export class TalentDTO {
  Name: string | undefined;
  Source: string | undefined;
}

export class DescriptionDTO {
  Description: string | undefined;
  Source: string | undefined;
}

export class SpellDTO {
  Name: string | undefined;
  Tradition: string | undefined;
  Casts: number | undefined;
}
export class AttributesDTO {
  Strength: string | undefined;
  Agility: string | undefined;
  Intellect: string | undefined;
  Will: string | undefined;
}

export class CharacteristicsDTO {
  Speed: string | undefined;
  Size: string | undefined;
  HealingRate: string | undefined;
  Health: string | undefined;
  Perception: string | undefined;
  Defense: string | undefined;
  Corruption: string | undefined;
  Insanity: string | undefined;
  Power: string | undefined;
  Damage: string | undefined;
}

export class LanguageDTO {
  Name: string | undefined;
  Proficiencies: string[] | undefined;
}

export class ProfessionDTO {
  Type: string | undefined;
  Description: string | undefined;
}

export class ItemDTO {
  Name: string | undefined;
  Properties?: string[];
  Type: string | undefined;
  AttackBonus?: string;
  Quantity: number | undefined;
  Defense?: string;
  ArmorType?: string;
}

export class CharacterDTO {
  Level: number = 0;
  Name: string = "";
  Ancestry: string = "";

  Paths: Record<string, string> = {};
  Professions: ProfessionDTO[] = [];
  Description: DescriptionDTO[] = [];
  Hatred: string[] = [];

  Attributes: AttributesDTO = {
    Strength: "",
    Agility: "",
    Intellect: "",
    Will: ""
  };

  Characteristics: CharacteristicsDTO = {
    Speed: "",
    Size: "",
    HealingRate: "",
    Health: "",
    Perception: "",
    Defense: "",
    Corruption: "",
    Insanity: "",
    Power: "",
    Damage: ""
  };
  Languages: LanguageDTO[] = [];

  Religion: string = "";
  Traditions: string[] = [];
  Spells: SpellDTO[] = [];
  Talents: TalentDTO[] = [];

  Coins: string = "";
  Lifestyle: string = "";
  Equipment: ItemDTO[] = [];
}