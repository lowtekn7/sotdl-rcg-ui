export class TalentDTO {
  Name: string | undefined
  IsPerceptionRelated: boolean | undefined
}

export class DescriptionDTO {
  Description: string | undefined
  Source: string | undefined
}

export class SpellDTO {
  Name: string = ''
  Tradition: string = ''
  Rank: number = 0
}
export class AttributesDTO {
  Strength: string | undefined
  Agility: string | undefined
  Intellect: string | undefined
  Will: string | undefined
}

export class CharacteristicsDTO {
  Speed: string | undefined
  Size: string | undefined
  HealingRate: string | undefined
  Health: string | undefined
  Perception: string | undefined
  Defense: string | undefined
  Corruption: string | undefined
  Insanity: string | undefined
  Power: string | undefined
  Damage: string | undefined
}

export class ItemDTO {
  Name: string = ''
  Properties: string[] = []
  Type: string | undefined
  AttackBonus?: string
  Quantity: number = 1
  Defense?: string
  ArmorType?: string
  WeaponType?: string
  Spells: SpellDTO[] = []
}

export class CharacterDTO {
  Level: number = 0
  Name: string = ''
  Ancestry: string = ''
  Personality: string[] = []
  Paths: Record<string, string> = {}
  Professions: Record<string, string[]> = {}
  Description: Record<string, string[]> = {}
  Hatred: string[] = []
  MarksOfDarkness: string[] = []

  Attributes: AttributesDTO = {
    Strength: '',
    Agility: '',
    Intellect: '',
    Will: '',
  }

  Characteristics: CharacteristicsDTO = {
    Speed: '',
    Size: '',
    HealingRate: '',
    Health: '',
    Perception: '',
    Defense: '',
    Corruption: '',
    Insanity: '',
    Power: '',
    Damage: '',
  }
  Languages: Record<string, string[]> = {}

  Religion: string = ''
  Traditions: string[] = []
  Spells: SpellDTO[] = []
  Talents: Record<string, TalentDTO[]> = {}

  Coins: string = ''
  Lifestyle: string = ''
  Equipment: ItemDTO[] = []
}
