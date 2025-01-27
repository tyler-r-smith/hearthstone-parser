export const enum SecretClass {
	Druid = 'DRUID',
	Mage = 'MAGE',
	Hunter = 'HUNTER',
	Paladin = 'PALADIN',
	Priest = 'PRIEST',
	Rogue = 'ROGUE',
	Shaman = 'SHAMAN',
	Warlock = 'WARLOCK',
	Warrior = 'WARRIOR'
}

export const secretToClass: {[id: string]: SecretClass} =
{
	AT_002: SecretClass.Mage,
	AT_060: SecretClass.Hunter,
	AT_073: SecretClass.Paladin,
	BOT_908: SecretClass.Paladin,
	CFM_026: SecretClass.Hunter,
	CFM_620: SecretClass.Mage,
	CFM_800: SecretClass.Paladin,
	DAL_570: SecretClass.Paladin,
	EX1_130: SecretClass.Paladin,
	EX1_132: SecretClass.Paladin,
	EX1_136: SecretClass.Paladin,
	EX1_287: SecretClass.Mage,
	EX1_289: SecretClass.Mage,
	EX1_294: SecretClass.Mage,
	EX1_295: SecretClass.Mage,
	EX1_379: SecretClass.Paladin,
	EX1_533: SecretClass.Hunter,
	EX1_554: SecretClass.Hunter,
	EX1_594: SecretClass.Mage,
	EX1_609: SecretClass.Hunter,
	EX1_610: SecretClass.Hunter,
	EX1_611: SecretClass.Hunter,
	FP1_018: SecretClass.Mage,
	FP1_020: SecretClass.Paladin,
	GIL_577: SecretClass.Hunter,
	GIL_903: SecretClass.Paladin,
	ICC_082: SecretClass.Mage,
	ICC_200: SecretClass.Hunter,
	KAR_004: SecretClass.Hunter,
	LOE_021: SecretClass.Hunter,
	LOE_027: SecretClass.Paladin,
	LOOT_079: SecretClass.Hunter,
	LOOT_101: SecretClass.Mage,
	LOOT_204: SecretClass.Rogue,
	LOOT_210: SecretClass.Rogue,
	LOOT_214: SecretClass.Rogue,
	TRL_400: SecretClass.Mage,
	tt_010: SecretClass.Mage, // eslint-disable-line @typescript-eslint/camelcase
	ULD_152: SecretClass.Hunter,
	ULD_239: SecretClass.Mage,
	UNG_024: SecretClass.Mage
};
