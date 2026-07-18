export enum DatePostedTypeEnum {
  ANY_TIME = "any_time",
  LAST_24_HOURS = "last_24_hours",
  LAST_7_DAYS = "last_7_days",
  LAST_15_DAYS = "last_15_days",
  LAST_30_DAYS = "last_30_days",
}

export const DATE_POSTED_OPTIONS: {
  label: string;
  value: DatePostedTypeEnum;
}[] = [
  { label: "Any time", value: DatePostedTypeEnum.ANY_TIME },
  { label: "Last 24 hours", value: DatePostedTypeEnum.LAST_24_HOURS },
  { label: "Last 7 days ", value: DatePostedTypeEnum.LAST_7_DAYS },
  { label: "Last 15 days", value: DatePostedTypeEnum.LAST_15_DAYS },
  { label: "Last 30 days", value: DatePostedTypeEnum.LAST_30_DAYS },
];
