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
  Strength: number | undefined;
  Agility: number | undefined;
  Intellect: number | undefined;
  Will: number | undefined;
}

export class CharacteristicsDTO {
  Speed: number | undefined;
  Size: string | undefined;
  HealingRate: number | undefined;
  Health: number | undefined;
  Perception: number | undefined;
  Defense: number | undefined;
  Corruption: number | undefined;
  Insanity: number | undefined;
  Power: number | undefined;
  Damage: number | undefined;
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
    Strength: undefined,
    Agility: undefined,
    Intellect: undefined,
    Will: undefined
  };

  Characteristics: CharacteristicsDTO = {
    Speed: undefined,
    Size: undefined,
    HealingRate: undefined,
    Health: undefined,
    Perception: undefined,
    Defense: undefined,
    Corruption: undefined,
    Insanity: undefined,
    Power: undefined,
    Damage: undefined
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