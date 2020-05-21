import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: number;
  numeric: any;
  timestamptz: string;
  uuid: string;
};

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type FloatComparisonExp = {
  _eq?: Maybe<Scalars["Float"]>;
  _gt?: Maybe<Scalars["Float"]>;
  _gte?: Maybe<Scalars["Float"]>;
  _in?: Maybe<Array<Scalars["Float"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Float"]>;
  _lte?: Maybe<Scalars["Float"]>;
  _neq?: Maybe<Scalars["Float"]>;
  _nin?: Maybe<Array<Scalars["Float"]>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "baba_result_summary_mart" */
export type BabaResultSummaryMart = {
  __typename?: "baba_result_summary_mart";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "baba_result_summary_mart" */
export type BabaResultSummaryMartAggregate = {
  __typename?: "baba_result_summary_mart_aggregate";
  aggregate?: Maybe<BabaResultSummaryMartAggregateFields>;
  nodes: Array<BabaResultSummaryMart>;
};

/** aggregate fields of "baba_result_summary_mart" */
export type BabaResultSummaryMartAggregateFields = {
  __typename?: "baba_result_summary_mart_aggregate_fields";
  avg?: Maybe<BabaResultSummaryMartAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<BabaResultSummaryMartMaxFields>;
  min?: Maybe<BabaResultSummaryMartMinFields>;
  stddev?: Maybe<BabaResultSummaryMartStddevFields>;
  stddev_pop?: Maybe<BabaResultSummaryMartStddevPopFields>;
  stddev_samp?: Maybe<BabaResultSummaryMartStddevSampFields>;
  sum?: Maybe<BabaResultSummaryMartSumFields>;
  var_pop?: Maybe<BabaResultSummaryMartVarPopFields>;
  var_samp?: Maybe<BabaResultSummaryMartVarSampFields>;
  variance?: Maybe<BabaResultSummaryMartVarianceFields>;
};

/** aggregate fields of "baba_result_summary_mart" */
export type BabaResultSummaryMartAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BabaResultSummaryMartSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "baba_result_summary_mart" */
export type BabaResultSummaryMartAggregateOrderBy = {
  avg?: Maybe<BabaResultSummaryMartAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BabaResultSummaryMartMaxOrderBy>;
  min?: Maybe<BabaResultSummaryMartMinOrderBy>;
  stddev?: Maybe<BabaResultSummaryMartStddevOrderBy>;
  stddev_pop?: Maybe<BabaResultSummaryMartStddevPopOrderBy>;
  stddev_samp?: Maybe<BabaResultSummaryMartStddevSampOrderBy>;
  sum?: Maybe<BabaResultSummaryMartSumOrderBy>;
  var_pop?: Maybe<BabaResultSummaryMartVarPopOrderBy>;
  var_samp?: Maybe<BabaResultSummaryMartVarSampOrderBy>;
  variance?: Maybe<BabaResultSummaryMartVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "baba_result_summary_mart" */
export type BabaResultSummaryMartArrRelInsertInput = {
  data: Array<BabaResultSummaryMartInsertInput>;
};

/** aggregate avg on columns */
export type BabaResultSummaryMartAvgFields = {
  __typename?: "baba_result_summary_mart_avg_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartAvgOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "baba_result_summary_mart". All fields are combined with a logical 'AND'. */
export type BabaResultSummaryMartBoolExp = {
  _and?: Maybe<Array<Maybe<BabaResultSummaryMartBoolExp>>>;
  _not?: Maybe<BabaResultSummaryMartBoolExp>;
  _or?: Maybe<Array<Maybe<BabaResultSummaryMartBoolExp>>>;
  c_baba_condition?: Maybe<StringComparisonExp>;
  c_track_type?: Maybe<StringComparisonExp>;
  first_count?: Maybe<BigintComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  out_of_returns_count?: Maybe<BigintComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  second_count?: Maybe<BigintComparisonExp>;
  third_count?: Maybe<BigintComparisonExp>;
};

/** input type for incrementing integer column in table "baba_result_summary_mart" */
export type BabaResultSummaryMartIncInput = {
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "baba_result_summary_mart" */
export type BabaResultSummaryMartInsertInput = {
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate max on columns */
export type BabaResultSummaryMartMaxFields = {
  __typename?: "baba_result_summary_mart_max_fields";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartMaxOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BabaResultSummaryMartMinFields = {
  __typename?: "baba_result_summary_mart_min_fields";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartMinOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "baba_result_summary_mart" */
export type BabaResultSummaryMartMutationResponse = {
  __typename?: "baba_result_summary_mart_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<BabaResultSummaryMart>;
};

/** input type for inserting object relation for remote table "baba_result_summary_mart" */
export type BabaResultSummaryMartObjRelInsertInput = {
  data: BabaResultSummaryMartInsertInput;
};

/** ordering options when selecting data from "baba_result_summary_mart" */
export type BabaResultSummaryMartOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** select columns of table "baba_result_summary_mart" */
export enum BabaResultSummaryMartSelectColumn {
  /** column name */
  C_BABA_CONDITION = "c_baba_condition",
  /** column name */
  C_TRACK_TYPE = "c_track_type",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  OUT_OF_RETURNS_COUNT = "out_of_returns_count",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
}

/** input type for updating data in table "baba_result_summary_mart" */
export type BabaResultSummaryMartSetInput = {
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate stddev on columns */
export type BabaResultSummaryMartStddevFields = {
  __typename?: "baba_result_summary_mart_stddev_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartStddevOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BabaResultSummaryMartStddevPopFields = {
  __typename?: "baba_result_summary_mart_stddev_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartStddevPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BabaResultSummaryMartStddevSampFields = {
  __typename?: "baba_result_summary_mart_stddev_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartStddevSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BabaResultSummaryMartSumFields = {
  __typename?: "baba_result_summary_mart_sum_fields";
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartSumOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type BabaResultSummaryMartVarPopFields = {
  __typename?: "baba_result_summary_mart_var_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartVarPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BabaResultSummaryMartVarSampFields = {
  __typename?: "baba_result_summary_mart_var_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartVarSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BabaResultSummaryMartVarianceFields = {
  __typename?: "baba_result_summary_mart_variance_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "baba_result_summary_mart" */
export type BabaResultSummaryMartVarianceOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** columns and relationships of "babas" */
export type Babas = {
  __typename?: "babas";
  baba_id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "babas" */
export type BabasAggregate = {
  __typename?: "babas_aggregate";
  aggregate?: Maybe<BabasAggregateFields>;
  nodes: Array<Babas>;
};

/** aggregate fields of "babas" */
export type BabasAggregateFields = {
  __typename?: "babas_aggregate_fields";
  avg?: Maybe<BabasAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<BabasMaxFields>;
  min?: Maybe<BabasMinFields>;
  stddev?: Maybe<BabasStddevFields>;
  stddev_pop?: Maybe<BabasStddevPopFields>;
  stddev_samp?: Maybe<BabasStddevSampFields>;
  sum?: Maybe<BabasSumFields>;
  var_pop?: Maybe<BabasVarPopFields>;
  var_samp?: Maybe<BabasVarSampFields>;
  variance?: Maybe<BabasVarianceFields>;
};

/** aggregate fields of "babas" */
export type BabasAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BabasSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "babas" */
export type BabasAggregateOrderBy = {
  avg?: Maybe<BabasAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BabasMaxOrderBy>;
  min?: Maybe<BabasMinOrderBy>;
  stddev?: Maybe<BabasStddevOrderBy>;
  stddev_pop?: Maybe<BabasStddevPopOrderBy>;
  stddev_samp?: Maybe<BabasStddevSampOrderBy>;
  sum?: Maybe<BabasSumOrderBy>;
  var_pop?: Maybe<BabasVarPopOrderBy>;
  var_samp?: Maybe<BabasVarSampOrderBy>;
  variance?: Maybe<BabasVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "babas" */
export type BabasArrRelInsertInput = {
  data: Array<BabasInsertInput>;
  on_conflict?: Maybe<BabasOnConflict>;
};

/** aggregate avg on columns */
export type BabasAvgFields = {
  __typename?: "babas_avg_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "babas" */
export type BabasAvgOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "babas". All fields are combined with a logical 'AND'. */
export type BabasBoolExp = {
  _and?: Maybe<Array<Maybe<BabasBoolExp>>>;
  _not?: Maybe<BabasBoolExp>;
  _or?: Maybe<Array<Maybe<BabasBoolExp>>>;
  baba_id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "babas" */
export enum BabasConstraint {
  /** unique or primary key constraint */
  BABAS_PKEY = "babas_pkey",
}

/** input type for incrementing integer column in table "babas" */
export type BabasIncInput = {
  baba_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "babas" */
export type BabasInsertInput = {
  baba_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type BabasMaxFields = {
  __typename?: "babas_max_fields";
  baba_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "babas" */
export type BabasMaxOrderBy = {
  baba_id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BabasMinFields = {
  __typename?: "babas_min_fields";
  baba_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "babas" */
export type BabasMinOrderBy = {
  baba_id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "babas" */
export type BabasMutationResponse = {
  __typename?: "babas_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Babas>;
};

/** input type for inserting object relation for remote table "babas" */
export type BabasObjRelInsertInput = {
  data: BabasInsertInput;
  on_conflict?: Maybe<BabasOnConflict>;
};

/** on conflict condition type for table "babas" */
export type BabasOnConflict = {
  constraint: BabasConstraint;
  update_columns: Array<BabasUpdateColumn>;
  where?: Maybe<BabasBoolExp>;
};

/** ordering options when selecting data from "babas" */
export type BabasOrderBy = {
  baba_id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "babas" */
export type BabasPkColumnsInput = {
  baba_id: Scalars["Int"];
};

/** select columns of table "babas" */
export enum BabasSelectColumn {
  /** column name */
  BABA_ID = "baba_id",
  /** column name */
  NAME = "name",
}

/** input type for updating data in table "babas" */
export type BabasSetInput = {
  baba_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type BabasStddevFields = {
  __typename?: "babas_stddev_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "babas" */
export type BabasStddevOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BabasStddevPopFields = {
  __typename?: "babas_stddev_pop_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "babas" */
export type BabasStddevPopOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BabasStddevSampFields = {
  __typename?: "babas_stddev_samp_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "babas" */
export type BabasStddevSampOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BabasSumFields = {
  __typename?: "babas_sum_fields";
  baba_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "babas" */
export type BabasSumOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** update columns of table "babas" */
export enum BabasUpdateColumn {
  /** column name */
  BABA_ID = "baba_id",
  /** column name */
  NAME = "name",
}

/** aggregate var_pop on columns */
export type BabasVarPopFields = {
  __typename?: "babas_var_pop_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "babas" */
export type BabasVarPopOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BabasVarSampFields = {
  __typename?: "babas_var_samp_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "babas" */
export type BabasVarSampOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BabasVarianceFields = {
  __typename?: "babas_variance_fields";
  baba_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "babas" */
export type BabasVarianceOrderBy = {
  baba_id?: Maybe<OrderBy>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Scalars["bigint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "blogs" */
export type Blogs = {
  __typename?: "blogs";
  author?: Maybe<Scalars["String"]>;
  createdAt: Scalars["timestamptz"];
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt: Scalars["timestamptz"];
  url: Scalars["String"];
};

/** aggregated selection of "blogs" */
export type BlogsAggregate = {
  __typename?: "blogs_aggregate";
  aggregate?: Maybe<BlogsAggregateFields>;
  nodes: Array<Blogs>;
};

/** aggregate fields of "blogs" */
export type BlogsAggregateFields = {
  __typename?: "blogs_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<BlogsMaxFields>;
  min?: Maybe<BlogsMinFields>;
};

/** aggregate fields of "blogs" */
export type BlogsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "blogs" */
export type BlogsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogsMaxOrderBy>;
  min?: Maybe<BlogsMinOrderBy>;
};

/** input type for inserting array relation for remote table "blogs" */
export type BlogsArrRelInsertInput = {
  data: Array<BlogsInsertInput>;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** Boolean expression to filter rows from the table "blogs". All fields are combined with a logical 'AND'. */
export type BlogsBoolExp = {
  _and?: Maybe<Array<Maybe<BlogsBoolExp>>>;
  _not?: Maybe<BlogsBoolExp>;
  _or?: Maybe<Array<Maybe<BlogsBoolExp>>>;
  author?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  image?: Maybe<StringComparisonExp>;
  summary?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
  url?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "blogs" */
export enum BlogsConstraint {
  /** unique or primary key constraint */
  BLOGS_PKEY = "blogs_pkey",
}

/** input type for inserting data into table "blogs" */
export type BlogsInsertInput = {
  author?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type BlogsMaxFields = {
  __typename?: "blogs_max_fields";
  author?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "blogs" */
export type BlogsMaxOrderBy = {
  author?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  summary?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogsMinFields = {
  __typename?: "blogs_min_fields";
  author?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "blogs" */
export type BlogsMinOrderBy = {
  author?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  summary?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blogs" */
export type BlogsMutationResponse = {
  __typename?: "blogs_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Blogs>;
};

/** input type for inserting object relation for remote table "blogs" */
export type BlogsObjRelInsertInput = {
  data: BlogsInsertInput;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** on conflict condition type for table "blogs" */
export type BlogsOnConflict = {
  constraint: BlogsConstraint;
  update_columns: Array<BlogsUpdateColumn>;
  where?: Maybe<BlogsBoolExp>;
};

/** ordering options when selecting data from "blogs" */
export type BlogsOrderBy = {
  author?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  summary?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blogs" */
export type BlogsPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "blogs" */
export enum BlogsSelectColumn {
  /** column name */
  AUTHOR = "author",
  /** column name */
  CREATEDAT = "createdAt",
  /** column name */
  ID = "id",
  /** column name */
  IMAGE = "image",
  /** column name */
  SUMMARY = "summary",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATEDAT = "updatedAt",
  /** column name */
  URL = "url",
}

/** input type for updating data in table "blogs" */
export type BlogsSetInput = {
  author?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** update columns of table "blogs" */
export enum BlogsUpdateColumn {
  /** column name */
  AUTHOR = "author",
  /** column name */
  CREATEDAT = "createdAt",
  /** column name */
  ID = "id",
  /** column name */
  IMAGE = "image",
  /** column name */
  SUMMARY = "summary",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATEDAT = "updatedAt",
  /** column name */
  URL = "url",
}

/** columns and relationships of "course_result_summary_mart" */
export type CourseResultSummaryMart = {
  __typename?: "course_result_summary_mart";
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "course_result_summary_mart" */
export type CourseResultSummaryMartAggregate = {
  __typename?: "course_result_summary_mart_aggregate";
  aggregate?: Maybe<CourseResultSummaryMartAggregateFields>;
  nodes: Array<CourseResultSummaryMart>;
};

/** aggregate fields of "course_result_summary_mart" */
export type CourseResultSummaryMartAggregateFields = {
  __typename?: "course_result_summary_mart_aggregate_fields";
  avg?: Maybe<CourseResultSummaryMartAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<CourseResultSummaryMartMaxFields>;
  min?: Maybe<CourseResultSummaryMartMinFields>;
  stddev?: Maybe<CourseResultSummaryMartStddevFields>;
  stddev_pop?: Maybe<CourseResultSummaryMartStddevPopFields>;
  stddev_samp?: Maybe<CourseResultSummaryMartStddevSampFields>;
  sum?: Maybe<CourseResultSummaryMartSumFields>;
  var_pop?: Maybe<CourseResultSummaryMartVarPopFields>;
  var_samp?: Maybe<CourseResultSummaryMartVarSampFields>;
  variance?: Maybe<CourseResultSummaryMartVarianceFields>;
};

/** aggregate fields of "course_result_summary_mart" */
export type CourseResultSummaryMartAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CourseResultSummaryMartSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "course_result_summary_mart" */
export type CourseResultSummaryMartAggregateOrderBy = {
  avg?: Maybe<CourseResultSummaryMartAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<CourseResultSummaryMartMaxOrderBy>;
  min?: Maybe<CourseResultSummaryMartMinOrderBy>;
  stddev?: Maybe<CourseResultSummaryMartStddevOrderBy>;
  stddev_pop?: Maybe<CourseResultSummaryMartStddevPopOrderBy>;
  stddev_samp?: Maybe<CourseResultSummaryMartStddevSampOrderBy>;
  sum?: Maybe<CourseResultSummaryMartSumOrderBy>;
  var_pop?: Maybe<CourseResultSummaryMartVarPopOrderBy>;
  var_samp?: Maybe<CourseResultSummaryMartVarSampOrderBy>;
  variance?: Maybe<CourseResultSummaryMartVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "course_result_summary_mart" */
export type CourseResultSummaryMartArrRelInsertInput = {
  data: Array<CourseResultSummaryMartInsertInput>;
};

/** aggregate avg on columns */
export type CourseResultSummaryMartAvgFields = {
  __typename?: "course_result_summary_mart_avg_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartAvgOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "course_result_summary_mart". All fields are combined with a logical 'AND'. */
export type CourseResultSummaryMartBoolExp = {
  _and?: Maybe<Array<Maybe<CourseResultSummaryMartBoolExp>>>;
  _not?: Maybe<CourseResultSummaryMartBoolExp>;
  _or?: Maybe<Array<Maybe<CourseResultSummaryMartBoolExp>>>;
  c_track_type?: Maybe<StringComparisonExp>;
  first_count?: Maybe<BigintComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  out_of_returns_count?: Maybe<BigintComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  place_name?: Maybe<StringComparisonExp>;
  second_count?: Maybe<BigintComparisonExp>;
  third_count?: Maybe<BigintComparisonExp>;
};

/** input type for incrementing integer column in table "course_result_summary_mart" */
export type CourseResultSummaryMartIncInput = {
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "course_result_summary_mart" */
export type CourseResultSummaryMartInsertInput = {
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate max on columns */
export type CourseResultSummaryMartMaxFields = {
  __typename?: "course_result_summary_mart_max_fields";
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartMaxOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CourseResultSummaryMartMinFields = {
  __typename?: "course_result_summary_mart_min_fields";
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartMinOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "course_result_summary_mart" */
export type CourseResultSummaryMartMutationResponse = {
  __typename?: "course_result_summary_mart_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<CourseResultSummaryMart>;
};

/** input type for inserting object relation for remote table "course_result_summary_mart" */
export type CourseResultSummaryMartObjRelInsertInput = {
  data: CourseResultSummaryMartInsertInput;
};

/** ordering options when selecting data from "course_result_summary_mart" */
export type CourseResultSummaryMartOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** select columns of table "course_result_summary_mart" */
export enum CourseResultSummaryMartSelectColumn {
  /** column name */
  C_TRACK_TYPE = "c_track_type",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  OUT_OF_RETURNS_COUNT = "out_of_returns_count",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  PLACE_NAME = "place_name",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
}

/** input type for updating data in table "course_result_summary_mart" */
export type CourseResultSummaryMartSetInput = {
  c_track_type?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate stddev on columns */
export type CourseResultSummaryMartStddevFields = {
  __typename?: "course_result_summary_mart_stddev_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartStddevOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CourseResultSummaryMartStddevPopFields = {
  __typename?: "course_result_summary_mart_stddev_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartStddevPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CourseResultSummaryMartStddevSampFields = {
  __typename?: "course_result_summary_mart_stddev_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartStddevSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type CourseResultSummaryMartSumFields = {
  __typename?: "course_result_summary_mart_sum_fields";
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartSumOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CourseResultSummaryMartVarPopFields = {
  __typename?: "course_result_summary_mart_var_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartVarPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CourseResultSummaryMartVarSampFields = {
  __typename?: "course_result_summary_mart_var_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartVarSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type CourseResultSummaryMartVarianceFields = {
  __typename?: "course_result_summary_mart_variance_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "course_result_summary_mart" */
export type CourseResultSummaryMartVarianceOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** columns and relationships of "distance_result_summary_mart" */
export type DistanceResultSummaryMart = {
  __typename?: "distance_result_summary_mart";
  c_track_type?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "distance_result_summary_mart" */
export type DistanceResultSummaryMartAggregate = {
  __typename?: "distance_result_summary_mart_aggregate";
  aggregate?: Maybe<DistanceResultSummaryMartAggregateFields>;
  nodes: Array<DistanceResultSummaryMart>;
};

/** aggregate fields of "distance_result_summary_mart" */
export type DistanceResultSummaryMartAggregateFields = {
  __typename?: "distance_result_summary_mart_aggregate_fields";
  avg?: Maybe<DistanceResultSummaryMartAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<DistanceResultSummaryMartMaxFields>;
  min?: Maybe<DistanceResultSummaryMartMinFields>;
  stddev?: Maybe<DistanceResultSummaryMartStddevFields>;
  stddev_pop?: Maybe<DistanceResultSummaryMartStddevPopFields>;
  stddev_samp?: Maybe<DistanceResultSummaryMartStddevSampFields>;
  sum?: Maybe<DistanceResultSummaryMartSumFields>;
  var_pop?: Maybe<DistanceResultSummaryMartVarPopFields>;
  var_samp?: Maybe<DistanceResultSummaryMartVarSampFields>;
  variance?: Maybe<DistanceResultSummaryMartVarianceFields>;
};

/** aggregate fields of "distance_result_summary_mart" */
export type DistanceResultSummaryMartAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DistanceResultSummaryMartSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartAggregateOrderBy = {
  avg?: Maybe<DistanceResultSummaryMartAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<DistanceResultSummaryMartMaxOrderBy>;
  min?: Maybe<DistanceResultSummaryMartMinOrderBy>;
  stddev?: Maybe<DistanceResultSummaryMartStddevOrderBy>;
  stddev_pop?: Maybe<DistanceResultSummaryMartStddevPopOrderBy>;
  stddev_samp?: Maybe<DistanceResultSummaryMartStddevSampOrderBy>;
  sum?: Maybe<DistanceResultSummaryMartSumOrderBy>;
  var_pop?: Maybe<DistanceResultSummaryMartVarPopOrderBy>;
  var_samp?: Maybe<DistanceResultSummaryMartVarSampOrderBy>;
  variance?: Maybe<DistanceResultSummaryMartVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "distance_result_summary_mart" */
export type DistanceResultSummaryMartArrRelInsertInput = {
  data: Array<DistanceResultSummaryMartInsertInput>;
};

/** aggregate avg on columns */
export type DistanceResultSummaryMartAvgFields = {
  __typename?: "distance_result_summary_mart_avg_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartAvgOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "distance_result_summary_mart". All fields are combined with a logical 'AND'. */
export type DistanceResultSummaryMartBoolExp = {
  _and?: Maybe<Array<Maybe<DistanceResultSummaryMartBoolExp>>>;
  _not?: Maybe<DistanceResultSummaryMartBoolExp>;
  _or?: Maybe<Array<Maybe<DistanceResultSummaryMartBoolExp>>>;
  c_track_type?: Maybe<StringComparisonExp>;
  distance?: Maybe<IntComparisonExp>;
  first_count?: Maybe<BigintComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  out_of_returns_count?: Maybe<BigintComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  second_count?: Maybe<BigintComparisonExp>;
  third_count?: Maybe<BigintComparisonExp>;
};

/** input type for incrementing integer column in table "distance_result_summary_mart" */
export type DistanceResultSummaryMartIncInput = {
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "distance_result_summary_mart" */
export type DistanceResultSummaryMartInsertInput = {
  c_track_type?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate max on columns */
export type DistanceResultSummaryMartMaxFields = {
  __typename?: "distance_result_summary_mart_max_fields";
  c_track_type?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartMaxOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DistanceResultSummaryMartMinFields = {
  __typename?: "distance_result_summary_mart_min_fields";
  c_track_type?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartMinOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "distance_result_summary_mart" */
export type DistanceResultSummaryMartMutationResponse = {
  __typename?: "distance_result_summary_mart_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<DistanceResultSummaryMart>;
};

/** input type for inserting object relation for remote table "distance_result_summary_mart" */
export type DistanceResultSummaryMartObjRelInsertInput = {
  data: DistanceResultSummaryMartInsertInput;
};

/** ordering options when selecting data from "distance_result_summary_mart" */
export type DistanceResultSummaryMartOrderBy = {
  c_track_type?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** select columns of table "distance_result_summary_mart" */
export enum DistanceResultSummaryMartSelectColumn {
  /** column name */
  C_TRACK_TYPE = "c_track_type",
  /** column name */
  DISTANCE = "distance",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  OUT_OF_RETURNS_COUNT = "out_of_returns_count",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
}

/** input type for updating data in table "distance_result_summary_mart" */
export type DistanceResultSummaryMartSetInput = {
  c_track_type?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_name?: Maybe<Scalars["String"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate stddev on columns */
export type DistanceResultSummaryMartStddevFields = {
  __typename?: "distance_result_summary_mart_stddev_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartStddevOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DistanceResultSummaryMartStddevPopFields = {
  __typename?: "distance_result_summary_mart_stddev_pop_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartStddevPopOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DistanceResultSummaryMartStddevSampFields = {
  __typename?: "distance_result_summary_mart_stddev_samp_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartStddevSampOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type DistanceResultSummaryMartSumFields = {
  __typename?: "distance_result_summary_mart_sum_fields";
  distance?: Maybe<Scalars["Int"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  out_of_returns_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartSumOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type DistanceResultSummaryMartVarPopFields = {
  __typename?: "distance_result_summary_mart_var_pop_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartVarPopOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DistanceResultSummaryMartVarSampFields = {
  __typename?: "distance_result_summary_mart_var_samp_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartVarSampOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type DistanceResultSummaryMartVarianceFields = {
  __typename?: "distance_result_summary_mart_variance_fields";
  distance?: Maybe<Scalars["Float"]>;
  first_count?: Maybe<Scalars["Float"]>;
  out_of_returns_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "distance_result_summary_mart" */
export type DistanceResultSummaryMartVarianceOrderBy = {
  distance?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  out_of_returns_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
};

/** columns and relationships of "holdings" */
export type Holdings = {
  __typename?: "holdings";
  cryoprotectant?: Maybe<Scalars["String"]>;
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_day?: Maybe<Scalars["String"]>;
  holding_key: Scalars["String"];
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  place_name?: Maybe<Scalars["String"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  rolling?: Maybe<Scalars["String"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "holdings" */
export type HoldingsAggregate = {
  __typename?: "holdings_aggregate";
  aggregate?: Maybe<HoldingsAggregateFields>;
  nodes: Array<Holdings>;
};

/** aggregate fields of "holdings" */
export type HoldingsAggregateFields = {
  __typename?: "holdings_aggregate_fields";
  avg?: Maybe<HoldingsAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<HoldingsMaxFields>;
  min?: Maybe<HoldingsMinFields>;
  stddev?: Maybe<HoldingsStddevFields>;
  stddev_pop?: Maybe<HoldingsStddevPopFields>;
  stddev_samp?: Maybe<HoldingsStddevSampFields>;
  sum?: Maybe<HoldingsSumFields>;
  var_pop?: Maybe<HoldingsVarPopFields>;
  var_samp?: Maybe<HoldingsVarSampFields>;
  variance?: Maybe<HoldingsVarianceFields>;
};

/** aggregate fields of "holdings" */
export type HoldingsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<HoldingsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "holdings" */
export type HoldingsAggregateOrderBy = {
  avg?: Maybe<HoldingsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<HoldingsMaxOrderBy>;
  min?: Maybe<HoldingsMinOrderBy>;
  stddev?: Maybe<HoldingsStddevOrderBy>;
  stddev_pop?: Maybe<HoldingsStddevPopOrderBy>;
  stddev_samp?: Maybe<HoldingsStddevSampOrderBy>;
  sum?: Maybe<HoldingsSumOrderBy>;
  var_pop?: Maybe<HoldingsVarPopOrderBy>;
  var_samp?: Maybe<HoldingsVarSampOrderBy>;
  variance?: Maybe<HoldingsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "holdings" */
export type HoldingsArrRelInsertInput = {
  data: Array<HoldingsInsertInput>;
  on_conflict?: Maybe<HoldingsOnConflict>;
};

/** aggregate avg on columns */
export type HoldingsAvgFields = {
  __typename?: "holdings_avg_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "holdings" */
export type HoldingsAvgOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "holdings". All fields are combined with a logical 'AND'. */
export type HoldingsBoolExp = {
  _and?: Maybe<Array<Maybe<HoldingsBoolExp>>>;
  _not?: Maybe<HoldingsBoolExp>;
  _or?: Maybe<Array<Maybe<HoldingsBoolExp>>>;
  cryoprotectant?: Maybe<StringComparisonExp>;
  dart_baba_state_center?: Maybe<IntComparisonExp>;
  dart_baba_state_code?: Maybe<IntComparisonExp>;
  dart_baba_state_diff?: Maybe<IntComparisonExp>;
  dart_baba_state_in?: Maybe<IntComparisonExp>;
  dart_baba_state_out?: Maybe<IntComparisonExp>;
  data_partition?: Maybe<IntComparisonExp>;
  day_count?: Maybe<IntComparisonExp>;
  holding_day?: Maybe<StringComparisonExp>;
  holding_key?: Maybe<StringComparisonExp>;
  holding_partition?: Maybe<IntComparisonExp>;
  intermediate_precipitation?: Maybe<FloatComparisonExp>;
  linear_baba_diff_center?: Maybe<IntComparisonExp>;
  linear_baba_diff_in?: Maybe<IntComparisonExp>;
  linear_baba_diff_out?: Maybe<IntComparisonExp>;
  linear_baba_diff_outdoor?: Maybe<IntComparisonExp>;
  linear_baba_diff_within?: Maybe<IntComparisonExp>;
  place_name?: Maybe<StringComparisonExp>;
  plant_height?: Maybe<FloatComparisonExp>;
  rolling?: Maybe<StringComparisonExp>;
  siba_baba_state_center?: Maybe<IntComparisonExp>;
  siba_baba_state_code?: Maybe<IntComparisonExp>;
  siba_baba_state_diff?: Maybe<IntComparisonExp>;
  siba_baba_state_in?: Maybe<IntComparisonExp>;
  siba_baba_state_out?: Maybe<IntComparisonExp>;
  siba_type?: Maybe<IntComparisonExp>;
  weather_code?: Maybe<IntComparisonExp>;
  weekday?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "holdings" */
export enum HoldingsConstraint {
  /** unique or primary key constraint */
  HOLDINGS_PKEY = "holdings_pkey",
}

/** input type for incrementing integer column in table "holdings" */
export type HoldingsIncInput = {
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "holdings" */
export type HoldingsInsertInput = {
  cryoprotectant?: Maybe<Scalars["String"]>;
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_day?: Maybe<Scalars["String"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  place_name?: Maybe<Scalars["String"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  rolling?: Maybe<Scalars["String"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type HoldingsMaxFields = {
  __typename?: "holdings_max_fields";
  cryoprotectant?: Maybe<Scalars["String"]>;
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_day?: Maybe<Scalars["String"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  place_name?: Maybe<Scalars["String"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  rolling?: Maybe<Scalars["String"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "holdings" */
export type HoldingsMaxOrderBy = {
  cryoprotectant?: Maybe<OrderBy>;
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_day?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  rolling?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
  weekday?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type HoldingsMinFields = {
  __typename?: "holdings_min_fields";
  cryoprotectant?: Maybe<Scalars["String"]>;
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_day?: Maybe<Scalars["String"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  place_name?: Maybe<Scalars["String"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  rolling?: Maybe<Scalars["String"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "holdings" */
export type HoldingsMinOrderBy = {
  cryoprotectant?: Maybe<OrderBy>;
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_day?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  rolling?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
  weekday?: Maybe<OrderBy>;
};

/** response of any mutation on the table "holdings" */
export type HoldingsMutationResponse = {
  __typename?: "holdings_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Holdings>;
};

/** input type for inserting object relation for remote table "holdings" */
export type HoldingsObjRelInsertInput = {
  data: HoldingsInsertInput;
  on_conflict?: Maybe<HoldingsOnConflict>;
};

/** on conflict condition type for table "holdings" */
export type HoldingsOnConflict = {
  constraint: HoldingsConstraint;
  update_columns: Array<HoldingsUpdateColumn>;
  where?: Maybe<HoldingsBoolExp>;
};

/** ordering options when selecting data from "holdings" */
export type HoldingsOrderBy = {
  cryoprotectant?: Maybe<OrderBy>;
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_day?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  rolling?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
  weekday?: Maybe<OrderBy>;
};

/** primary key columns input for table: "holdings" */
export type HoldingsPkColumnsInput = {
  holding_key: Scalars["String"];
};

/** select columns of table "holdings" */
export enum HoldingsSelectColumn {
  /** column name */
  CRYOPROTECTANT = "cryoprotectant",
  /** column name */
  DART_BABA_STATE_CENTER = "dart_baba_state_center",
  /** column name */
  DART_BABA_STATE_CODE = "dart_baba_state_code",
  /** column name */
  DART_BABA_STATE_DIFF = "dart_baba_state_diff",
  /** column name */
  DART_BABA_STATE_IN = "dart_baba_state_in",
  /** column name */
  DART_BABA_STATE_OUT = "dart_baba_state_out",
  /** column name */
  DATA_PARTITION = "data_partition",
  /** column name */
  DAY_COUNT = "day_count",
  /** column name */
  HOLDING_DAY = "holding_day",
  /** column name */
  HOLDING_KEY = "holding_key",
  /** column name */
  HOLDING_PARTITION = "holding_partition",
  /** column name */
  INTERMEDIATE_PRECIPITATION = "intermediate_precipitation",
  /** column name */
  LINEAR_BABA_DIFF_CENTER = "linear_baba_diff_center",
  /** column name */
  LINEAR_BABA_DIFF_IN = "linear_baba_diff_in",
  /** column name */
  LINEAR_BABA_DIFF_OUT = "linear_baba_diff_out",
  /** column name */
  LINEAR_BABA_DIFF_OUTDOOR = "linear_baba_diff_outdoor",
  /** column name */
  LINEAR_BABA_DIFF_WITHIN = "linear_baba_diff_within",
  /** column name */
  PLACE_NAME = "place_name",
  /** column name */
  PLANT_HEIGHT = "plant_height",
  /** column name */
  ROLLING = "rolling",
  /** column name */
  SIBA_BABA_STATE_CENTER = "siba_baba_state_center",
  /** column name */
  SIBA_BABA_STATE_CODE = "siba_baba_state_code",
  /** column name */
  SIBA_BABA_STATE_DIFF = "siba_baba_state_diff",
  /** column name */
  SIBA_BABA_STATE_IN = "siba_baba_state_in",
  /** column name */
  SIBA_BABA_STATE_OUT = "siba_baba_state_out",
  /** column name */
  SIBA_TYPE = "siba_type",
  /** column name */
  WEATHER_CODE = "weather_code",
  /** column name */
  WEEKDAY = "weekday",
}

/** input type for updating data in table "holdings" */
export type HoldingsSetInput = {
  cryoprotectant?: Maybe<Scalars["String"]>;
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_day?: Maybe<Scalars["String"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  place_name?: Maybe<Scalars["String"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  rolling?: Maybe<Scalars["String"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type HoldingsStddevFields = {
  __typename?: "holdings_stddev_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "holdings" */
export type HoldingsStddevOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type HoldingsStddevPopFields = {
  __typename?: "holdings_stddev_pop_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "holdings" */
export type HoldingsStddevPopOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type HoldingsStddevSampFields = {
  __typename?: "holdings_stddev_samp_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "holdings" */
export type HoldingsStddevSampOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type HoldingsSumFields = {
  __typename?: "holdings_sum_fields";
  dart_baba_state_center?: Maybe<Scalars["Int"]>;
  dart_baba_state_code?: Maybe<Scalars["Int"]>;
  dart_baba_state_diff?: Maybe<Scalars["Int"]>;
  dart_baba_state_in?: Maybe<Scalars["Int"]>;
  dart_baba_state_out?: Maybe<Scalars["Int"]>;
  data_partition?: Maybe<Scalars["Int"]>;
  day_count?: Maybe<Scalars["Int"]>;
  holding_partition?: Maybe<Scalars["Int"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Int"]>;
  linear_baba_diff_in?: Maybe<Scalars["Int"]>;
  linear_baba_diff_out?: Maybe<Scalars["Int"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Int"]>;
  linear_baba_diff_within?: Maybe<Scalars["Int"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Int"]>;
  siba_baba_state_code?: Maybe<Scalars["Int"]>;
  siba_baba_state_diff?: Maybe<Scalars["Int"]>;
  siba_baba_state_in?: Maybe<Scalars["Int"]>;
  siba_baba_state_out?: Maybe<Scalars["Int"]>;
  siba_type?: Maybe<Scalars["Int"]>;
  weather_code?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "holdings" */
export type HoldingsSumOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** update columns of table "holdings" */
export enum HoldingsUpdateColumn {
  /** column name */
  CRYOPROTECTANT = "cryoprotectant",
  /** column name */
  DART_BABA_STATE_CENTER = "dart_baba_state_center",
  /** column name */
  DART_BABA_STATE_CODE = "dart_baba_state_code",
  /** column name */
  DART_BABA_STATE_DIFF = "dart_baba_state_diff",
  /** column name */
  DART_BABA_STATE_IN = "dart_baba_state_in",
  /** column name */
  DART_BABA_STATE_OUT = "dart_baba_state_out",
  /** column name */
  DATA_PARTITION = "data_partition",
  /** column name */
  DAY_COUNT = "day_count",
  /** column name */
  HOLDING_DAY = "holding_day",
  /** column name */
  HOLDING_KEY = "holding_key",
  /** column name */
  HOLDING_PARTITION = "holding_partition",
  /** column name */
  INTERMEDIATE_PRECIPITATION = "intermediate_precipitation",
  /** column name */
  LINEAR_BABA_DIFF_CENTER = "linear_baba_diff_center",
  /** column name */
  LINEAR_BABA_DIFF_IN = "linear_baba_diff_in",
  /** column name */
  LINEAR_BABA_DIFF_OUT = "linear_baba_diff_out",
  /** column name */
  LINEAR_BABA_DIFF_OUTDOOR = "linear_baba_diff_outdoor",
  /** column name */
  LINEAR_BABA_DIFF_WITHIN = "linear_baba_diff_within",
  /** column name */
  PLACE_NAME = "place_name",
  /** column name */
  PLANT_HEIGHT = "plant_height",
  /** column name */
  ROLLING = "rolling",
  /** column name */
  SIBA_BABA_STATE_CENTER = "siba_baba_state_center",
  /** column name */
  SIBA_BABA_STATE_CODE = "siba_baba_state_code",
  /** column name */
  SIBA_BABA_STATE_DIFF = "siba_baba_state_diff",
  /** column name */
  SIBA_BABA_STATE_IN = "siba_baba_state_in",
  /** column name */
  SIBA_BABA_STATE_OUT = "siba_baba_state_out",
  /** column name */
  SIBA_TYPE = "siba_type",
  /** column name */
  WEATHER_CODE = "weather_code",
  /** column name */
  WEEKDAY = "weekday",
}

/** aggregate var_pop on columns */
export type HoldingsVarPopFields = {
  __typename?: "holdings_var_pop_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "holdings" */
export type HoldingsVarPopOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type HoldingsVarSampFields = {
  __typename?: "holdings_var_samp_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "holdings" */
export type HoldingsVarSampOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type HoldingsVarianceFields = {
  __typename?: "holdings_variance_fields";
  dart_baba_state_center?: Maybe<Scalars["Float"]>;
  dart_baba_state_code?: Maybe<Scalars["Float"]>;
  dart_baba_state_diff?: Maybe<Scalars["Float"]>;
  dart_baba_state_in?: Maybe<Scalars["Float"]>;
  dart_baba_state_out?: Maybe<Scalars["Float"]>;
  data_partition?: Maybe<Scalars["Float"]>;
  day_count?: Maybe<Scalars["Float"]>;
  holding_partition?: Maybe<Scalars["Float"]>;
  intermediate_precipitation?: Maybe<Scalars["Float"]>;
  linear_baba_diff_center?: Maybe<Scalars["Float"]>;
  linear_baba_diff_in?: Maybe<Scalars["Float"]>;
  linear_baba_diff_out?: Maybe<Scalars["Float"]>;
  linear_baba_diff_outdoor?: Maybe<Scalars["Float"]>;
  linear_baba_diff_within?: Maybe<Scalars["Float"]>;
  plant_height?: Maybe<Scalars["Float"]>;
  siba_baba_state_center?: Maybe<Scalars["Float"]>;
  siba_baba_state_code?: Maybe<Scalars["Float"]>;
  siba_baba_state_diff?: Maybe<Scalars["Float"]>;
  siba_baba_state_in?: Maybe<Scalars["Float"]>;
  siba_baba_state_out?: Maybe<Scalars["Float"]>;
  siba_type?: Maybe<Scalars["Float"]>;
  weather_code?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "holdings" */
export type HoldingsVarianceOrderBy = {
  dart_baba_state_center?: Maybe<OrderBy>;
  dart_baba_state_code?: Maybe<OrderBy>;
  dart_baba_state_diff?: Maybe<OrderBy>;
  dart_baba_state_in?: Maybe<OrderBy>;
  dart_baba_state_out?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  day_count?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  intermediate_precipitation?: Maybe<OrderBy>;
  linear_baba_diff_center?: Maybe<OrderBy>;
  linear_baba_diff_in?: Maybe<OrderBy>;
  linear_baba_diff_out?: Maybe<OrderBy>;
  linear_baba_diff_outdoor?: Maybe<OrderBy>;
  linear_baba_diff_within?: Maybe<OrderBy>;
  plant_height?: Maybe<OrderBy>;
  siba_baba_state_center?: Maybe<OrderBy>;
  siba_baba_state_code?: Maybe<OrderBy>;
  siba_baba_state_diff?: Maybe<OrderBy>;
  siba_baba_state_in?: Maybe<OrderBy>;
  siba_baba_state_out?: Maybe<OrderBy>;
  siba_type?: Maybe<OrderBy>;
  weather_code?: Maybe<OrderBy>;
};

/**
 * レースごとの馬番成績
 *
 *
 * columns and relationships of "horse_num_count"
 */
export type HorseNumCount = {
  __typename?: "horse_num_count";
  common_race_name: Scalars["String"];
  first_count: Scalars["bigint"];
  horse_num: Scalars["Int"];
  out_count: Scalars["bigint"];
  second_count: Scalars["bigint"];
  third_count: Scalars["bigint"];
  total_count: Scalars["bigint"];
};

/** aggregated selection of "horse_num_count" */
export type HorseNumCountAggregate = {
  __typename?: "horse_num_count_aggregate";
  aggregate?: Maybe<HorseNumCountAggregateFields>;
  nodes: Array<HorseNumCount>;
};

/** aggregate fields of "horse_num_count" */
export type HorseNumCountAggregateFields = {
  __typename?: "horse_num_count_aggregate_fields";
  avg?: Maybe<HorseNumCountAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<HorseNumCountMaxFields>;
  min?: Maybe<HorseNumCountMinFields>;
  stddev?: Maybe<HorseNumCountStddevFields>;
  stddev_pop?: Maybe<HorseNumCountStddevPopFields>;
  stddev_samp?: Maybe<HorseNumCountStddevSampFields>;
  sum?: Maybe<HorseNumCountSumFields>;
  var_pop?: Maybe<HorseNumCountVarPopFields>;
  var_samp?: Maybe<HorseNumCountVarSampFields>;
  variance?: Maybe<HorseNumCountVarianceFields>;
};

/** aggregate fields of "horse_num_count" */
export type HorseNumCountAggregateFieldsCountArgs = {
  columns?: Maybe<Array<HorseNumCountSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "horse_num_count" */
export type HorseNumCountAggregateOrderBy = {
  avg?: Maybe<HorseNumCountAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<HorseNumCountMaxOrderBy>;
  min?: Maybe<HorseNumCountMinOrderBy>;
  stddev?: Maybe<HorseNumCountStddevOrderBy>;
  stddev_pop?: Maybe<HorseNumCountStddevPopOrderBy>;
  stddev_samp?: Maybe<HorseNumCountStddevSampOrderBy>;
  sum?: Maybe<HorseNumCountSumOrderBy>;
  var_pop?: Maybe<HorseNumCountVarPopOrderBy>;
  var_samp?: Maybe<HorseNumCountVarSampOrderBy>;
  variance?: Maybe<HorseNumCountVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "horse_num_count" */
export type HorseNumCountArrRelInsertInput = {
  data: Array<HorseNumCountInsertInput>;
  on_conflict?: Maybe<HorseNumCountOnConflict>;
};

/** aggregate avg on columns */
export type HorseNumCountAvgFields = {
  __typename?: "horse_num_count_avg_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "horse_num_count" */
export type HorseNumCountAvgOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "horse_num_count". All fields are combined with a logical 'AND'. */
export type HorseNumCountBoolExp = {
  _and?: Maybe<Array<Maybe<HorseNumCountBoolExp>>>;
  _not?: Maybe<HorseNumCountBoolExp>;
  _or?: Maybe<Array<Maybe<HorseNumCountBoolExp>>>;
  common_race_name?: Maybe<StringComparisonExp>;
  first_count?: Maybe<BigintComparisonExp>;
  horse_num?: Maybe<IntComparisonExp>;
  out_count?: Maybe<BigintComparisonExp>;
  second_count?: Maybe<BigintComparisonExp>;
  third_count?: Maybe<BigintComparisonExp>;
  total_count?: Maybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "horse_num_count" */
export enum HorseNumCountConstraint {
  /** unique or primary key constraint */
  HORSE_NUM_COUNT_PKEY = "horse_num_count_pkey",
}

/** input type for incrementing integer column in table "horse_num_count" */
export type HorseNumCountIncInput = {
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "horse_num_count" */
export type HorseNumCountInsertInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate max on columns */
export type HorseNumCountMaxFields = {
  __typename?: "horse_num_count_max_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "horse_num_count" */
export type HorseNumCountMaxOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type HorseNumCountMinFields = {
  __typename?: "horse_num_count_min_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "horse_num_count" */
export type HorseNumCountMinOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "horse_num_count" */
export type HorseNumCountMutationResponse = {
  __typename?: "horse_num_count_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<HorseNumCount>;
};

/** input type for inserting object relation for remote table "horse_num_count" */
export type HorseNumCountObjRelInsertInput = {
  data: HorseNumCountInsertInput;
  on_conflict?: Maybe<HorseNumCountOnConflict>;
};

/** on conflict condition type for table "horse_num_count" */
export type HorseNumCountOnConflict = {
  constraint: HorseNumCountConstraint;
  update_columns: Array<HorseNumCountUpdateColumn>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** ordering options when selecting data from "horse_num_count" */
export type HorseNumCountOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** primary key columns input for table: "horse_num_count" */
export type HorseNumCountPkColumnsInput = {
  common_race_name: Scalars["String"];
};

/** select columns of table "horse_num_count" */
export enum HorseNumCountSelectColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  OUT_COUNT = "out_count",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
  /** column name */
  TOTAL_COUNT = "total_count",
}

/** input type for updating data in table "horse_num_count" */
export type HorseNumCountSetInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate stddev on columns */
export type HorseNumCountStddevFields = {
  __typename?: "horse_num_count_stddev_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "horse_num_count" */
export type HorseNumCountStddevOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type HorseNumCountStddevPopFields = {
  __typename?: "horse_num_count_stddev_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "horse_num_count" */
export type HorseNumCountStddevPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type HorseNumCountStddevSampFields = {
  __typename?: "horse_num_count_stddev_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "horse_num_count" */
export type HorseNumCountStddevSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type HorseNumCountSumFields = {
  __typename?: "horse_num_count_sum_fields";
  first_count?: Maybe<Scalars["bigint"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "horse_num_count" */
export type HorseNumCountSumOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** update columns of table "horse_num_count" */
export enum HorseNumCountUpdateColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  OUT_COUNT = "out_count",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
  /** column name */
  TOTAL_COUNT = "total_count",
}

/** aggregate var_pop on columns */
export type HorseNumCountVarPopFields = {
  __typename?: "horse_num_count_var_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "horse_num_count" */
export type HorseNumCountVarPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type HorseNumCountVarSampFields = {
  __typename?: "horse_num_count_var_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "horse_num_count" */
export type HorseNumCountVarSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type HorseNumCountVarianceFields = {
  __typename?: "horse_num_count_variance_fields";
  first_count?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "horse_num_count" */
export type HorseNumCountVarianceOrderBy = {
  first_count?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** columns and relationships of "horses" */
export type Horses = {
  __typename?: "horses";
  birthday?: Maybe<Scalars["String"]>;
  coat_color_code?: Maybe<Scalars["Int"]>;
  data_date?: Maybe<Scalars["String"]>;
  father_birthday?: Maybe<Scalars["String"]>;
  father_horse_name?: Maybe<Scalars["String"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_birthday?: Maybe<Scalars["String"]>;
  mother_father_birthday?: Maybe<Scalars["String"]>;
  mother_father_horse_name?: Maybe<Scalars["String"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  mother_horse_name?: Maybe<Scalars["String"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pedigree_register: Scalars["String"];
  producer_name?: Maybe<Scalars["String"]>;
  production_place_name?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "horses" */
export type HorsesAggregate = {
  __typename?: "horses_aggregate";
  aggregate?: Maybe<HorsesAggregateFields>;
  nodes: Array<Horses>;
};

/** aggregate fields of "horses" */
export type HorsesAggregateFields = {
  __typename?: "horses_aggregate_fields";
  avg?: Maybe<HorsesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<HorsesMaxFields>;
  min?: Maybe<HorsesMinFields>;
  stddev?: Maybe<HorsesStddevFields>;
  stddev_pop?: Maybe<HorsesStddevPopFields>;
  stddev_samp?: Maybe<HorsesStddevSampFields>;
  sum?: Maybe<HorsesSumFields>;
  var_pop?: Maybe<HorsesVarPopFields>;
  var_samp?: Maybe<HorsesVarSampFields>;
  variance?: Maybe<HorsesVarianceFields>;
};

/** aggregate fields of "horses" */
export type HorsesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<HorsesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "horses" */
export type HorsesAggregateOrderBy = {
  avg?: Maybe<HorsesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<HorsesMaxOrderBy>;
  min?: Maybe<HorsesMinOrderBy>;
  stddev?: Maybe<HorsesStddevOrderBy>;
  stddev_pop?: Maybe<HorsesStddevPopOrderBy>;
  stddev_samp?: Maybe<HorsesStddevSampOrderBy>;
  sum?: Maybe<HorsesSumOrderBy>;
  var_pop?: Maybe<HorsesVarPopOrderBy>;
  var_samp?: Maybe<HorsesVarSampOrderBy>;
  variance?: Maybe<HorsesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "horses" */
export type HorsesArrRelInsertInput = {
  data: Array<HorsesInsertInput>;
  on_conflict?: Maybe<HorsesOnConflict>;
};

/** aggregate avg on columns */
export type HorsesAvgFields = {
  __typename?: "horses_avg_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "horses" */
export type HorsesAvgOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "horses". All fields are combined with a logical 'AND'. */
export type HorsesBoolExp = {
  _and?: Maybe<Array<Maybe<HorsesBoolExp>>>;
  _not?: Maybe<HorsesBoolExp>;
  _or?: Maybe<Array<Maybe<HorsesBoolExp>>>;
  birthday?: Maybe<StringComparisonExp>;
  coat_color_code?: Maybe<IntComparisonExp>;
  data_date?: Maybe<StringComparisonExp>;
  father_birthday?: Maybe<StringComparisonExp>;
  father_horse_name?: Maybe<StringComparisonExp>;
  father_lineage_code?: Maybe<IntComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  horse_sign_code?: Maybe<IntComparisonExp>;
  mother_birthday?: Maybe<StringComparisonExp>;
  mother_father_birthday?: Maybe<StringComparisonExp>;
  mother_father_horse_name?: Maybe<StringComparisonExp>;
  mother_father_lineage_code?: Maybe<IntComparisonExp>;
  mother_horse_name?: Maybe<StringComparisonExp>;
  owner_group_code?: Maybe<IntComparisonExp>;
  owner_name?: Maybe<StringComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  producer_name?: Maybe<StringComparisonExp>;
  production_place_name?: Maybe<StringComparisonExp>;
  register_delete_flag?: Maybe<IntComparisonExp>;
  sex_code?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "horses" */
export enum HorsesConstraint {
  /** unique or primary key constraint */
  HORSES_PKEY = "horses_pkey",
}

/** input type for incrementing integer column in table "horses" */
export type HorsesIncInput = {
  coat_color_code?: Maybe<Scalars["Int"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "horses" */
export type HorsesInsertInput = {
  birthday?: Maybe<Scalars["String"]>;
  coat_color_code?: Maybe<Scalars["Int"]>;
  data_date?: Maybe<Scalars["String"]>;
  father_birthday?: Maybe<Scalars["String"]>;
  father_horse_name?: Maybe<Scalars["String"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_birthday?: Maybe<Scalars["String"]>;
  mother_father_birthday?: Maybe<Scalars["String"]>;
  mother_father_horse_name?: Maybe<Scalars["String"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  mother_horse_name?: Maybe<Scalars["String"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  producer_name?: Maybe<Scalars["String"]>;
  production_place_name?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type HorsesMaxFields = {
  __typename?: "horses_max_fields";
  birthday?: Maybe<Scalars["String"]>;
  coat_color_code?: Maybe<Scalars["Int"]>;
  data_date?: Maybe<Scalars["String"]>;
  father_birthday?: Maybe<Scalars["String"]>;
  father_horse_name?: Maybe<Scalars["String"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_birthday?: Maybe<Scalars["String"]>;
  mother_father_birthday?: Maybe<Scalars["String"]>;
  mother_father_horse_name?: Maybe<Scalars["String"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  mother_horse_name?: Maybe<Scalars["String"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  producer_name?: Maybe<Scalars["String"]>;
  production_place_name?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "horses" */
export type HorsesMaxOrderBy = {
  birthday?: Maybe<OrderBy>;
  coat_color_code?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  father_birthday?: Maybe<OrderBy>;
  father_horse_name?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_birthday?: Maybe<OrderBy>;
  mother_father_birthday?: Maybe<OrderBy>;
  mother_father_horse_name?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  mother_horse_name?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  producer_name?: Maybe<OrderBy>;
  production_place_name?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type HorsesMinFields = {
  __typename?: "horses_min_fields";
  birthday?: Maybe<Scalars["String"]>;
  coat_color_code?: Maybe<Scalars["Int"]>;
  data_date?: Maybe<Scalars["String"]>;
  father_birthday?: Maybe<Scalars["String"]>;
  father_horse_name?: Maybe<Scalars["String"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_birthday?: Maybe<Scalars["String"]>;
  mother_father_birthday?: Maybe<Scalars["String"]>;
  mother_father_horse_name?: Maybe<Scalars["String"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  mother_horse_name?: Maybe<Scalars["String"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  producer_name?: Maybe<Scalars["String"]>;
  production_place_name?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "horses" */
export type HorsesMinOrderBy = {
  birthday?: Maybe<OrderBy>;
  coat_color_code?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  father_birthday?: Maybe<OrderBy>;
  father_horse_name?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_birthday?: Maybe<OrderBy>;
  mother_father_birthday?: Maybe<OrderBy>;
  mother_father_horse_name?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  mother_horse_name?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  producer_name?: Maybe<OrderBy>;
  production_place_name?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** response of any mutation on the table "horses" */
export type HorsesMutationResponse = {
  __typename?: "horses_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Horses>;
};

/** input type for inserting object relation for remote table "horses" */
export type HorsesObjRelInsertInput = {
  data: HorsesInsertInput;
  on_conflict?: Maybe<HorsesOnConflict>;
};

/** on conflict condition type for table "horses" */
export type HorsesOnConflict = {
  constraint: HorsesConstraint;
  update_columns: Array<HorsesUpdateColumn>;
  where?: Maybe<HorsesBoolExp>;
};

/** ordering options when selecting data from "horses" */
export type HorsesOrderBy = {
  birthday?: Maybe<OrderBy>;
  coat_color_code?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  father_birthday?: Maybe<OrderBy>;
  father_horse_name?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_birthday?: Maybe<OrderBy>;
  mother_father_birthday?: Maybe<OrderBy>;
  mother_father_horse_name?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  mother_horse_name?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  producer_name?: Maybe<OrderBy>;
  production_place_name?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** primary key columns input for table: "horses" */
export type HorsesPkColumnsInput = {
  pedigree_register: Scalars["String"];
};

/** select columns of table "horses" */
export enum HorsesSelectColumn {
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  COAT_COLOR_CODE = "coat_color_code",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  FATHER_BIRTHDAY = "father_birthday",
  /** column name */
  FATHER_HORSE_NAME = "father_horse_name",
  /** column name */
  FATHER_LINEAGE_CODE = "father_lineage_code",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_SIGN_CODE = "horse_sign_code",
  /** column name */
  MOTHER_BIRTHDAY = "mother_birthday",
  /** column name */
  MOTHER_FATHER_BIRTHDAY = "mother_father_birthday",
  /** column name */
  MOTHER_FATHER_HORSE_NAME = "mother_father_horse_name",
  /** column name */
  MOTHER_FATHER_LINEAGE_CODE = "mother_father_lineage_code",
  /** column name */
  MOTHER_HORSE_NAME = "mother_horse_name",
  /** column name */
  OWNER_GROUP_CODE = "owner_group_code",
  /** column name */
  OWNER_NAME = "owner_name",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  PRODUCER_NAME = "producer_name",
  /** column name */
  PRODUCTION_PLACE_NAME = "production_place_name",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  SEX_CODE = "sex_code",
}

/** input type for updating data in table "horses" */
export type HorsesSetInput = {
  birthday?: Maybe<Scalars["String"]>;
  coat_color_code?: Maybe<Scalars["Int"]>;
  data_date?: Maybe<Scalars["String"]>;
  father_birthday?: Maybe<Scalars["String"]>;
  father_horse_name?: Maybe<Scalars["String"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_birthday?: Maybe<Scalars["String"]>;
  mother_father_birthday?: Maybe<Scalars["String"]>;
  mother_father_horse_name?: Maybe<Scalars["String"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  mother_horse_name?: Maybe<Scalars["String"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  producer_name?: Maybe<Scalars["String"]>;
  production_place_name?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type HorsesStddevFields = {
  __typename?: "horses_stddev_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "horses" */
export type HorsesStddevOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type HorsesStddevPopFields = {
  __typename?: "horses_stddev_pop_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "horses" */
export type HorsesStddevPopOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type HorsesStddevSampFields = {
  __typename?: "horses_stddev_samp_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "horses" */
export type HorsesStddevSampOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type HorsesSumFields = {
  __typename?: "horses_sum_fields";
  coat_color_code?: Maybe<Scalars["Int"]>;
  father_lineage_code?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["Int"]>;
  mother_father_lineage_code?: Maybe<Scalars["Int"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "horses" */
export type HorsesSumOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** update columns of table "horses" */
export enum HorsesUpdateColumn {
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  COAT_COLOR_CODE = "coat_color_code",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  FATHER_BIRTHDAY = "father_birthday",
  /** column name */
  FATHER_HORSE_NAME = "father_horse_name",
  /** column name */
  FATHER_LINEAGE_CODE = "father_lineage_code",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_SIGN_CODE = "horse_sign_code",
  /** column name */
  MOTHER_BIRTHDAY = "mother_birthday",
  /** column name */
  MOTHER_FATHER_BIRTHDAY = "mother_father_birthday",
  /** column name */
  MOTHER_FATHER_HORSE_NAME = "mother_father_horse_name",
  /** column name */
  MOTHER_FATHER_LINEAGE_CODE = "mother_father_lineage_code",
  /** column name */
  MOTHER_HORSE_NAME = "mother_horse_name",
  /** column name */
  OWNER_GROUP_CODE = "owner_group_code",
  /** column name */
  OWNER_NAME = "owner_name",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  PRODUCER_NAME = "producer_name",
  /** column name */
  PRODUCTION_PLACE_NAME = "production_place_name",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  SEX_CODE = "sex_code",
}

/** aggregate var_pop on columns */
export type HorsesVarPopFields = {
  __typename?: "horses_var_pop_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "horses" */
export type HorsesVarPopOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type HorsesVarSampFields = {
  __typename?: "horses_var_samp_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "horses" */
export type HorsesVarSampOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type HorsesVarianceFields = {
  __typename?: "horses_variance_fields";
  coat_color_code?: Maybe<Scalars["Float"]>;
  father_lineage_code?: Maybe<Scalars["Float"]>;
  horse_sign_code?: Maybe<Scalars["Float"]>;
  mother_father_lineage_code?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "horses" */
export type HorsesVarianceOrderBy = {
  coat_color_code?: Maybe<OrderBy>;
  father_lineage_code?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  mother_father_lineage_code?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
};

/** columns and relationships of "jockeys" */
export type Jockeys = {
  __typename?: "jockeys";
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  belong_stable?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  jockey_aka?: Maybe<Scalars["String"]>;
  jockey_code: Scalars["String"];
  jockey_comment?: Maybe<Scalars["String"]>;
  jockey_kana?: Maybe<Scalars["String"]>;
  jockey_name?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "jockeys" */
export type JockeysAggregate = {
  __typename?: "jockeys_aggregate";
  aggregate?: Maybe<JockeysAggregateFields>;
  nodes: Array<Jockeys>;
};

/** aggregate fields of "jockeys" */
export type JockeysAggregateFields = {
  __typename?: "jockeys_aggregate_fields";
  avg?: Maybe<JockeysAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<JockeysMaxFields>;
  min?: Maybe<JockeysMinFields>;
  stddev?: Maybe<JockeysStddevFields>;
  stddev_pop?: Maybe<JockeysStddevPopFields>;
  stddev_samp?: Maybe<JockeysStddevSampFields>;
  sum?: Maybe<JockeysSumFields>;
  var_pop?: Maybe<JockeysVarPopFields>;
  var_samp?: Maybe<JockeysVarSampFields>;
  variance?: Maybe<JockeysVarianceFields>;
};

/** aggregate fields of "jockeys" */
export type JockeysAggregateFieldsCountArgs = {
  columns?: Maybe<Array<JockeysSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "jockeys" */
export type JockeysAggregateOrderBy = {
  avg?: Maybe<JockeysAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<JockeysMaxOrderBy>;
  min?: Maybe<JockeysMinOrderBy>;
  stddev?: Maybe<JockeysStddevOrderBy>;
  stddev_pop?: Maybe<JockeysStddevPopOrderBy>;
  stddev_samp?: Maybe<JockeysStddevSampOrderBy>;
  sum?: Maybe<JockeysSumOrderBy>;
  var_pop?: Maybe<JockeysVarPopOrderBy>;
  var_samp?: Maybe<JockeysVarSampOrderBy>;
  variance?: Maybe<JockeysVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "jockeys" */
export type JockeysArrRelInsertInput = {
  data: Array<JockeysInsertInput>;
  on_conflict?: Maybe<JockeysOnConflict>;
};

/** aggregate avg on columns */
export type JockeysAvgFields = {
  __typename?: "jockeys_avg_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "jockeys" */
export type JockeysAvgOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "jockeys". All fields are combined with a logical 'AND'. */
export type JockeysBoolExp = {
  _and?: Maybe<Array<Maybe<JockeysBoolExp>>>;
  _not?: Maybe<JockeysBoolExp>;
  _or?: Maybe<Array<Maybe<JockeysBoolExp>>>;
  apprentice_class?: Maybe<IntComparisonExp>;
  belong_code?: Maybe<IntComparisonExp>;
  belong_region_name?: Maybe<StringComparisonExp>;
  belong_stable?: Maybe<StringComparisonExp>;
  birthday?: Maybe<StringComparisonExp>;
  data_date?: Maybe<StringComparisonExp>;
  insert_comment_date?: Maybe<StringComparisonExp>;
  jockey_aka?: Maybe<StringComparisonExp>;
  jockey_code?: Maybe<StringComparisonExp>;
  jockey_comment?: Maybe<StringComparisonExp>;
  jockey_kana?: Maybe<StringComparisonExp>;
  jockey_name?: Maybe<StringComparisonExp>;
  license_year?: Maybe<IntComparisonExp>;
  reading_last_year?: Maybe<IntComparisonExp>;
  reading_this_year?: Maybe<IntComparisonExp>;
  register_delete_date?: Maybe<StringComparisonExp>;
  register_delete_flag?: Maybe<IntComparisonExp>;
  result_failure_last_year?: Maybe<StringComparisonExp>;
  result_failure_this_year?: Maybe<StringComparisonExp>;
  result_failure_total?: Maybe<StringComparisonExp>;
  result_flat_last_year?: Maybe<StringComparisonExp>;
  result_flat_this_year?: Maybe<StringComparisonExp>;
  result_flat_total?: Maybe<StringComparisonExp>;
  winnum_heavy_award_last_year?: Maybe<IntComparisonExp>;
  winnum_heavy_award_this_year?: Maybe<IntComparisonExp>;
  winnum_special_last_year?: Maybe<IntComparisonExp>;
  winnum_special_this_year?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "jockeys" */
export enum JockeysConstraint {
  /** unique or primary key constraint */
  JOCKEYS_PKEY = "jockeys_pkey",
}

/** input type for incrementing integer column in table "jockeys" */
export type JockeysIncInput = {
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "jockeys" */
export type JockeysInsertInput = {
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  belong_stable?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  jockey_aka?: Maybe<Scalars["String"]>;
  jockey_code?: Maybe<Scalars["String"]>;
  jockey_comment?: Maybe<Scalars["String"]>;
  jockey_kana?: Maybe<Scalars["String"]>;
  jockey_name?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type JockeysMaxFields = {
  __typename?: "jockeys_max_fields";
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  belong_stable?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  jockey_aka?: Maybe<Scalars["String"]>;
  jockey_code?: Maybe<Scalars["String"]>;
  jockey_comment?: Maybe<Scalars["String"]>;
  jockey_kana?: Maybe<Scalars["String"]>;
  jockey_name?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "jockeys" */
export type JockeysMaxOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  belong_stable?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  jockey_aka?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_comment?: Maybe<OrderBy>;
  jockey_kana?: Maybe<OrderBy>;
  jockey_name?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type JockeysMinFields = {
  __typename?: "jockeys_min_fields";
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  belong_stable?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  jockey_aka?: Maybe<Scalars["String"]>;
  jockey_code?: Maybe<Scalars["String"]>;
  jockey_comment?: Maybe<Scalars["String"]>;
  jockey_kana?: Maybe<Scalars["String"]>;
  jockey_name?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "jockeys" */
export type JockeysMinOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  belong_stable?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  jockey_aka?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_comment?: Maybe<OrderBy>;
  jockey_kana?: Maybe<OrderBy>;
  jockey_name?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** response of any mutation on the table "jockeys" */
export type JockeysMutationResponse = {
  __typename?: "jockeys_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Jockeys>;
};

/** input type for inserting object relation for remote table "jockeys" */
export type JockeysObjRelInsertInput = {
  data: JockeysInsertInput;
  on_conflict?: Maybe<JockeysOnConflict>;
};

/** on conflict condition type for table "jockeys" */
export type JockeysOnConflict = {
  constraint: JockeysConstraint;
  update_columns: Array<JockeysUpdateColumn>;
  where?: Maybe<JockeysBoolExp>;
};

/** ordering options when selecting data from "jockeys" */
export type JockeysOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  belong_stable?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  jockey_aka?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_comment?: Maybe<OrderBy>;
  jockey_kana?: Maybe<OrderBy>;
  jockey_name?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** primary key columns input for table: "jockeys" */
export type JockeysPkColumnsInput = {
  jockey_code: Scalars["String"];
};

/** select columns of table "jockeys" */
export enum JockeysSelectColumn {
  /** column name */
  APPRENTICE_CLASS = "apprentice_class",
  /** column name */
  BELONG_CODE = "belong_code",
  /** column name */
  BELONG_REGION_NAME = "belong_region_name",
  /** column name */
  BELONG_STABLE = "belong_stable",
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  INSERT_COMMENT_DATE = "insert_comment_date",
  /** column name */
  JOCKEY_AKA = "jockey_aka",
  /** column name */
  JOCKEY_CODE = "jockey_code",
  /** column name */
  JOCKEY_COMMENT = "jockey_comment",
  /** column name */
  JOCKEY_KANA = "jockey_kana",
  /** column name */
  JOCKEY_NAME = "jockey_name",
  /** column name */
  LICENSE_YEAR = "license_year",
  /** column name */
  READING_LAST_YEAR = "reading_last_year",
  /** column name */
  READING_THIS_YEAR = "reading_this_year",
  /** column name */
  REGISTER_DELETE_DATE = "register_delete_date",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  RESULT_FAILURE_LAST_YEAR = "result_failure_last_year",
  /** column name */
  RESULT_FAILURE_THIS_YEAR = "result_failure_this_year",
  /** column name */
  RESULT_FAILURE_TOTAL = "result_failure_total",
  /** column name */
  RESULT_FLAT_LAST_YEAR = "result_flat_last_year",
  /** column name */
  RESULT_FLAT_THIS_YEAR = "result_flat_this_year",
  /** column name */
  RESULT_FLAT_TOTAL = "result_flat_total",
  /** column name */
  WINNUM_HEAVY_AWARD_LAST_YEAR = "winnum_heavy_award_last_year",
  /** column name */
  WINNUM_HEAVY_AWARD_THIS_YEAR = "winnum_heavy_award_this_year",
  /** column name */
  WINNUM_SPECIAL_LAST_YEAR = "winnum_special_last_year",
  /** column name */
  WINNUM_SPECIAL_THIS_YEAR = "winnum_special_this_year",
}

/** input type for updating data in table "jockeys" */
export type JockeysSetInput = {
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  belong_stable?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  jockey_aka?: Maybe<Scalars["String"]>;
  jockey_code?: Maybe<Scalars["String"]>;
  jockey_comment?: Maybe<Scalars["String"]>;
  jockey_kana?: Maybe<Scalars["String"]>;
  jockey_name?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type JockeysStddevFields = {
  __typename?: "jockeys_stddev_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "jockeys" */
export type JockeysStddevOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type JockeysStddevPopFields = {
  __typename?: "jockeys_stddev_pop_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "jockeys" */
export type JockeysStddevPopOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type JockeysStddevSampFields = {
  __typename?: "jockeys_stddev_samp_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "jockeys" */
export type JockeysStddevSampOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type JockeysSumFields = {
  __typename?: "jockeys_sum_fields";
  apprentice_class?: Maybe<Scalars["Int"]>;
  belong_code?: Maybe<Scalars["Int"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "jockeys" */
export type JockeysSumOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** update columns of table "jockeys" */
export enum JockeysUpdateColumn {
  /** column name */
  APPRENTICE_CLASS = "apprentice_class",
  /** column name */
  BELONG_CODE = "belong_code",
  /** column name */
  BELONG_REGION_NAME = "belong_region_name",
  /** column name */
  BELONG_STABLE = "belong_stable",
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  INSERT_COMMENT_DATE = "insert_comment_date",
  /** column name */
  JOCKEY_AKA = "jockey_aka",
  /** column name */
  JOCKEY_CODE = "jockey_code",
  /** column name */
  JOCKEY_COMMENT = "jockey_comment",
  /** column name */
  JOCKEY_KANA = "jockey_kana",
  /** column name */
  JOCKEY_NAME = "jockey_name",
  /** column name */
  LICENSE_YEAR = "license_year",
  /** column name */
  READING_LAST_YEAR = "reading_last_year",
  /** column name */
  READING_THIS_YEAR = "reading_this_year",
  /** column name */
  REGISTER_DELETE_DATE = "register_delete_date",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  RESULT_FAILURE_LAST_YEAR = "result_failure_last_year",
  /** column name */
  RESULT_FAILURE_THIS_YEAR = "result_failure_this_year",
  /** column name */
  RESULT_FAILURE_TOTAL = "result_failure_total",
  /** column name */
  RESULT_FLAT_LAST_YEAR = "result_flat_last_year",
  /** column name */
  RESULT_FLAT_THIS_YEAR = "result_flat_this_year",
  /** column name */
  RESULT_FLAT_TOTAL = "result_flat_total",
  /** column name */
  WINNUM_HEAVY_AWARD_LAST_YEAR = "winnum_heavy_award_last_year",
  /** column name */
  WINNUM_HEAVY_AWARD_THIS_YEAR = "winnum_heavy_award_this_year",
  /** column name */
  WINNUM_SPECIAL_LAST_YEAR = "winnum_special_last_year",
  /** column name */
  WINNUM_SPECIAL_THIS_YEAR = "winnum_special_this_year",
}

/** aggregate var_pop on columns */
export type JockeysVarPopFields = {
  __typename?: "jockeys_var_pop_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "jockeys" */
export type JockeysVarPopOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type JockeysVarSampFields = {
  __typename?: "jockeys_var_samp_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "jockeys" */
export type JockeysVarSampOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type JockeysVarianceFields = {
  __typename?: "jockeys_variance_fields";
  apprentice_class?: Maybe<Scalars["Float"]>;
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "jockeys" */
export type JockeysVarianceOrderBy = {
  apprentice_class?: Maybe<OrderBy>;
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** columns and relationships of "legqualities" */
export type Legqualities = {
  __typename?: "legqualities";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "legqualities" */
export type LegqualitiesAggregate = {
  __typename?: "legqualities_aggregate";
  aggregate?: Maybe<LegqualitiesAggregateFields>;
  nodes: Array<Legqualities>;
};

/** aggregate fields of "legqualities" */
export type LegqualitiesAggregateFields = {
  __typename?: "legqualities_aggregate_fields";
  avg?: Maybe<LegqualitiesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<LegqualitiesMaxFields>;
  min?: Maybe<LegqualitiesMinFields>;
  stddev?: Maybe<LegqualitiesStddevFields>;
  stddev_pop?: Maybe<LegqualitiesStddevPopFields>;
  stddev_samp?: Maybe<LegqualitiesStddevSampFields>;
  sum?: Maybe<LegqualitiesSumFields>;
  var_pop?: Maybe<LegqualitiesVarPopFields>;
  var_samp?: Maybe<LegqualitiesVarSampFields>;
  variance?: Maybe<LegqualitiesVarianceFields>;
};

/** aggregate fields of "legqualities" */
export type LegqualitiesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LegqualitiesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "legqualities" */
export type LegqualitiesAggregateOrderBy = {
  avg?: Maybe<LegqualitiesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LegqualitiesMaxOrderBy>;
  min?: Maybe<LegqualitiesMinOrderBy>;
  stddev?: Maybe<LegqualitiesStddevOrderBy>;
  stddev_pop?: Maybe<LegqualitiesStddevPopOrderBy>;
  stddev_samp?: Maybe<LegqualitiesStddevSampOrderBy>;
  sum?: Maybe<LegqualitiesSumOrderBy>;
  var_pop?: Maybe<LegqualitiesVarPopOrderBy>;
  var_samp?: Maybe<LegqualitiesVarSampOrderBy>;
  variance?: Maybe<LegqualitiesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "legqualities" */
export type LegqualitiesArrRelInsertInput = {
  data: Array<LegqualitiesInsertInput>;
  on_conflict?: Maybe<LegqualitiesOnConflict>;
};

/** aggregate avg on columns */
export type LegqualitiesAvgFields = {
  __typename?: "legqualities_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "legqualities" */
export type LegqualitiesAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "legqualities". All fields are combined with a logical 'AND'. */
export type LegqualitiesBoolExp = {
  _and?: Maybe<Array<Maybe<LegqualitiesBoolExp>>>;
  _not?: Maybe<LegqualitiesBoolExp>;
  _or?: Maybe<Array<Maybe<LegqualitiesBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "legqualities" */
export enum LegqualitiesConstraint {
  /** unique or primary key constraint */
  LEGQUALITIES_PKEY = "legqualities_pkey",
}

/** input type for incrementing integer column in table "legqualities" */
export type LegqualitiesIncInput = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "legqualities" */
export type LegqualitiesInsertInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type LegqualitiesMaxFields = {
  __typename?: "legqualities_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "legqualities" */
export type LegqualitiesMaxOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LegqualitiesMinFields = {
  __typename?: "legqualities_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "legqualities" */
export type LegqualitiesMinOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "legqualities" */
export type LegqualitiesMutationResponse = {
  __typename?: "legqualities_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Legqualities>;
};

/** input type for inserting object relation for remote table "legqualities" */
export type LegqualitiesObjRelInsertInput = {
  data: LegqualitiesInsertInput;
  on_conflict?: Maybe<LegqualitiesOnConflict>;
};

/** on conflict condition type for table "legqualities" */
export type LegqualitiesOnConflict = {
  constraint: LegqualitiesConstraint;
  update_columns: Array<LegqualitiesUpdateColumn>;
  where?: Maybe<LegqualitiesBoolExp>;
};

/** ordering options when selecting data from "legqualities" */
export type LegqualitiesOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "legqualities" */
export type LegqualitiesPkColumnsInput = {
  id: Scalars["Int"];
};

/** select columns of table "legqualities" */
export enum LegqualitiesSelectColumn {
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
}

/** input type for updating data in table "legqualities" */
export type LegqualitiesSetInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type LegqualitiesStddevFields = {
  __typename?: "legqualities_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "legqualities" */
export type LegqualitiesStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LegqualitiesStddevPopFields = {
  __typename?: "legqualities_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "legqualities" */
export type LegqualitiesStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LegqualitiesStddevSampFields = {
  __typename?: "legqualities_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "legqualities" */
export type LegqualitiesStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LegqualitiesSumFields = {
  __typename?: "legqualities_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "legqualities" */
export type LegqualitiesSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "legqualities" */
export enum LegqualitiesUpdateColumn {
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
}

/** aggregate var_pop on columns */
export type LegqualitiesVarPopFields = {
  __typename?: "legqualities_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "legqualities" */
export type LegqualitiesVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LegqualitiesVarSampFields = {
  __typename?: "legqualities_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "legqualities" */
export type LegqualitiesVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LegqualitiesVarianceFields = {
  __typename?: "legqualities_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "legqualities" */
export type LegqualitiesVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "lineages" */
export type Lineages = {
  __typename?: "lineages";
  big_lineage_name?: Maybe<Scalars["String"]>;
  code: Scalars["Int"];
  small_lineage_name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "lineages" */
export type LineagesAggregate = {
  __typename?: "lineages_aggregate";
  aggregate?: Maybe<LineagesAggregateFields>;
  nodes: Array<Lineages>;
};

/** aggregate fields of "lineages" */
export type LineagesAggregateFields = {
  __typename?: "lineages_aggregate_fields";
  avg?: Maybe<LineagesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<LineagesMaxFields>;
  min?: Maybe<LineagesMinFields>;
  stddev?: Maybe<LineagesStddevFields>;
  stddev_pop?: Maybe<LineagesStddevPopFields>;
  stddev_samp?: Maybe<LineagesStddevSampFields>;
  sum?: Maybe<LineagesSumFields>;
  var_pop?: Maybe<LineagesVarPopFields>;
  var_samp?: Maybe<LineagesVarSampFields>;
  variance?: Maybe<LineagesVarianceFields>;
};

/** aggregate fields of "lineages" */
export type LineagesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LineagesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lineages" */
export type LineagesAggregateOrderBy = {
  avg?: Maybe<LineagesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LineagesMaxOrderBy>;
  min?: Maybe<LineagesMinOrderBy>;
  stddev?: Maybe<LineagesStddevOrderBy>;
  stddev_pop?: Maybe<LineagesStddevPopOrderBy>;
  stddev_samp?: Maybe<LineagesStddevSampOrderBy>;
  sum?: Maybe<LineagesSumOrderBy>;
  var_pop?: Maybe<LineagesVarPopOrderBy>;
  var_samp?: Maybe<LineagesVarSampOrderBy>;
  variance?: Maybe<LineagesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "lineages" */
export type LineagesArrRelInsertInput = {
  data: Array<LineagesInsertInput>;
  on_conflict?: Maybe<LineagesOnConflict>;
};

/** aggregate avg on columns */
export type LineagesAvgFields = {
  __typename?: "lineages_avg_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "lineages" */
export type LineagesAvgOrderBy = {
  code?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "lineages". All fields are combined with a logical 'AND'. */
export type LineagesBoolExp = {
  _and?: Maybe<Array<Maybe<LineagesBoolExp>>>;
  _not?: Maybe<LineagesBoolExp>;
  _or?: Maybe<Array<Maybe<LineagesBoolExp>>>;
  big_lineage_name?: Maybe<StringComparisonExp>;
  code?: Maybe<IntComparisonExp>;
  small_lineage_name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "lineages" */
export enum LineagesConstraint {
  /** unique or primary key constraint */
  LINEAGES_PKEY = "lineages_pkey",
}

/** input type for incrementing integer column in table "lineages" */
export type LineagesIncInput = {
  code?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lineages" */
export type LineagesInsertInput = {
  big_lineage_name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["Int"]>;
  small_lineage_name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type LineagesMaxFields = {
  __typename?: "lineages_max_fields";
  big_lineage_name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["Int"]>;
  small_lineage_name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "lineages" */
export type LineagesMaxOrderBy = {
  big_lineage_name?: Maybe<OrderBy>;
  code?: Maybe<OrderBy>;
  small_lineage_name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LineagesMinFields = {
  __typename?: "lineages_min_fields";
  big_lineage_name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["Int"]>;
  small_lineage_name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "lineages" */
export type LineagesMinOrderBy = {
  big_lineage_name?: Maybe<OrderBy>;
  code?: Maybe<OrderBy>;
  small_lineage_name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "lineages" */
export type LineagesMutationResponse = {
  __typename?: "lineages_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Lineages>;
};

/** input type for inserting object relation for remote table "lineages" */
export type LineagesObjRelInsertInput = {
  data: LineagesInsertInput;
  on_conflict?: Maybe<LineagesOnConflict>;
};

/** on conflict condition type for table "lineages" */
export type LineagesOnConflict = {
  constraint: LineagesConstraint;
  update_columns: Array<LineagesUpdateColumn>;
  where?: Maybe<LineagesBoolExp>;
};

/** ordering options when selecting data from "lineages" */
export type LineagesOrderBy = {
  big_lineage_name?: Maybe<OrderBy>;
  code?: Maybe<OrderBy>;
  small_lineage_name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "lineages" */
export type LineagesPkColumnsInput = {
  code: Scalars["Int"];
};

/** select columns of table "lineages" */
export enum LineagesSelectColumn {
  /** column name */
  BIG_LINEAGE_NAME = "big_lineage_name",
  /** column name */
  CODE = "code",
  /** column name */
  SMALL_LINEAGE_NAME = "small_lineage_name",
}

/** input type for updating data in table "lineages" */
export type LineagesSetInput = {
  big_lineage_name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["Int"]>;
  small_lineage_name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type LineagesStddevFields = {
  __typename?: "lineages_stddev_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "lineages" */
export type LineagesStddevOrderBy = {
  code?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LineagesStddevPopFields = {
  __typename?: "lineages_stddev_pop_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "lineages" */
export type LineagesStddevPopOrderBy = {
  code?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LineagesStddevSampFields = {
  __typename?: "lineages_stddev_samp_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "lineages" */
export type LineagesStddevSampOrderBy = {
  code?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LineagesSumFields = {
  __typename?: "lineages_sum_fields";
  code?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "lineages" */
export type LineagesSumOrderBy = {
  code?: Maybe<OrderBy>;
};

/** update columns of table "lineages" */
export enum LineagesUpdateColumn {
  /** column name */
  BIG_LINEAGE_NAME = "big_lineage_name",
  /** column name */
  CODE = "code",
  /** column name */
  SMALL_LINEAGE_NAME = "small_lineage_name",
}

/** aggregate var_pop on columns */
export type LineagesVarPopFields = {
  __typename?: "lineages_var_pop_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "lineages" */
export type LineagesVarPopOrderBy = {
  code?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LineagesVarSampFields = {
  __typename?: "lineages_var_samp_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "lineages" */
export type LineagesVarSampOrderBy = {
  code?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LineagesVarianceFields = {
  __typename?: "lineages_variance_fields";
  code?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "lineages" */
export type LineagesVarianceOrderBy = {
  code?: Maybe<OrderBy>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: "mutation_root";
  /** delete data from the table: "blogs" */
  deleteBlogs?: Maybe<BlogsMutationResponse>;
  /** delete data from the table: "baba_result_summary_mart" */
  delete_baba_result_summary_mart?: Maybe<BabaResultSummaryMartMutationResponse>;
  /** delete data from the table: "babas" */
  delete_babas?: Maybe<BabasMutationResponse>;
  /** delete single row from the table: "babas" */
  delete_babas_by_pk?: Maybe<Babas>;
  /** delete single row from the table: "blogs" */
  delete_blogs_by_pk?: Maybe<Blogs>;
  /** delete data from the table: "course_result_summary_mart" */
  delete_course_result_summary_mart?: Maybe<CourseResultSummaryMartMutationResponse>;
  /** delete data from the table: "distance_result_summary_mart" */
  delete_distance_result_summary_mart?: Maybe<DistanceResultSummaryMartMutationResponse>;
  /** delete data from the table: "holdings" */
  delete_holdings?: Maybe<HoldingsMutationResponse>;
  /** delete single row from the table: "holdings" */
  delete_holdings_by_pk?: Maybe<Holdings>;
  /** delete data from the table: "horse_num_count" */
  delete_horse_num_count?: Maybe<HorseNumCountMutationResponse>;
  /** delete single row from the table: "horse_num_count" */
  delete_horse_num_count_by_pk?: Maybe<HorseNumCount>;
  /** delete data from the table: "horses" */
  delete_horses?: Maybe<HorsesMutationResponse>;
  /** delete single row from the table: "horses" */
  delete_horses_by_pk?: Maybe<Horses>;
  /** delete data from the table: "jockeys" */
  delete_jockeys?: Maybe<JockeysMutationResponse>;
  /** delete single row from the table: "jockeys" */
  delete_jockeys_by_pk?: Maybe<Jockeys>;
  /** delete data from the table: "legqualities" */
  delete_legqualities?: Maybe<LegqualitiesMutationResponse>;
  /** delete single row from the table: "legqualities" */
  delete_legqualities_by_pk?: Maybe<Legqualities>;
  /** delete data from the table: "lineages" */
  delete_lineages?: Maybe<LineagesMutationResponse>;
  /** delete single row from the table: "lineages" */
  delete_lineages_by_pk?: Maybe<Lineages>;
  /** delete data from the table: "places" */
  delete_places?: Maybe<PlacesMutationResponse>;
  /** delete single row from the table: "places" */
  delete_places_by_pk?: Maybe<Places>;
  /** delete data from the table: "race_result_mart" */
  delete_race_result_mart?: Maybe<RaceResultMartMutationResponse>;
  /** delete data from the table: "races" */
  delete_races?: Maybe<RacesMutationResponse>;
  /** delete single row from the table: "races" */
  delete_races_by_pk?: Maybe<Races>;
  /** delete data from the table: "realtimehorses" */
  delete_realtimehorses?: Maybe<RealtimehorsesMutationResponse>;
  /** delete single row from the table: "realtimehorses" */
  delete_realtimehorses_by_pk?: Maybe<Realtimehorses>;
  /** delete data from the table: "refunds" */
  delete_refunds?: Maybe<RefundsMutationResponse>;
  /** delete single row from the table: "refunds" */
  delete_refunds_by_pk?: Maybe<Refunds>;
  /** delete data from the table: "results" */
  delete_results?: Maybe<ResultsMutationResponse>;
  /** delete single row from the table: "results" */
  delete_results_by_pk?: Maybe<Results>;
  /** delete data from the table: "rotation_result" */
  delete_rotation_result?: Maybe<RotationResultMutationResponse>;
  /** delete single row from the table: "rotation_result" */
  delete_rotation_result_by_pk?: Maybe<RotationResult>;
  /** delete data from the table: "running_horses" */
  delete_running_horses?: Maybe<RunningHorsesMutationResponse>;
  /** delete single row from the table: "running_horses" */
  delete_running_horses_by_pk?: Maybe<RunningHorses>;
  /** delete data from the table: "trainers" */
  delete_trainers?: Maybe<TrainersMutationResponse>;
  /** delete data from the table: "trainings" */
  delete_trainings?: Maybe<TrainingsMutationResponse>;
  /** delete single row from the table: "trainings" */
  delete_trainings_by_pk?: Maybe<Trainings>;
  /** insert data into the table: "blogs" */
  insertBlogs?: Maybe<BlogsMutationResponse>;
  /** insert data into the table: "baba_result_summary_mart" */
  insert_baba_result_summary_mart?: Maybe<BabaResultSummaryMartMutationResponse>;
  /** insert a single row into the table: "baba_result_summary_mart" */
  insert_baba_result_summary_mart_one?: Maybe<BabaResultSummaryMart>;
  /** insert data into the table: "babas" */
  insert_babas?: Maybe<BabasMutationResponse>;
  /** insert a single row into the table: "babas" */
  insert_babas_one?: Maybe<Babas>;
  /** insert a single row into the table: "blogs" */
  insert_blogs_one?: Maybe<Blogs>;
  /** insert data into the table: "course_result_summary_mart" */
  insert_course_result_summary_mart?: Maybe<CourseResultSummaryMartMutationResponse>;
  /** insert a single row into the table: "course_result_summary_mart" */
  insert_course_result_summary_mart_one?: Maybe<CourseResultSummaryMart>;
  /** insert data into the table: "distance_result_summary_mart" */
  insert_distance_result_summary_mart?: Maybe<DistanceResultSummaryMartMutationResponse>;
  /** insert a single row into the table: "distance_result_summary_mart" */
  insert_distance_result_summary_mart_one?: Maybe<DistanceResultSummaryMart>;
  /** insert data into the table: "holdings" */
  insert_holdings?: Maybe<HoldingsMutationResponse>;
  /** insert a single row into the table: "holdings" */
  insert_holdings_one?: Maybe<Holdings>;
  /** insert data into the table: "horse_num_count" */
  insert_horse_num_count?: Maybe<HorseNumCountMutationResponse>;
  /** insert a single row into the table: "horse_num_count" */
  insert_horse_num_count_one?: Maybe<HorseNumCount>;
  /** insert data into the table: "horses" */
  insert_horses?: Maybe<HorsesMutationResponse>;
  /** insert a single row into the table: "horses" */
  insert_horses_one?: Maybe<Horses>;
  /** insert data into the table: "jockeys" */
  insert_jockeys?: Maybe<JockeysMutationResponse>;
  /** insert a single row into the table: "jockeys" */
  insert_jockeys_one?: Maybe<Jockeys>;
  /** insert data into the table: "legqualities" */
  insert_legqualities?: Maybe<LegqualitiesMutationResponse>;
  /** insert a single row into the table: "legqualities" */
  insert_legqualities_one?: Maybe<Legqualities>;
  /** insert data into the table: "lineages" */
  insert_lineages?: Maybe<LineagesMutationResponse>;
  /** insert a single row into the table: "lineages" */
  insert_lineages_one?: Maybe<Lineages>;
  /** insert data into the table: "places" */
  insert_places?: Maybe<PlacesMutationResponse>;
  /** insert a single row into the table: "places" */
  insert_places_one?: Maybe<Places>;
  /** insert data into the table: "race_result_mart" */
  insert_race_result_mart?: Maybe<RaceResultMartMutationResponse>;
  /** insert a single row into the table: "race_result_mart" */
  insert_race_result_mart_one?: Maybe<RaceResultMart>;
  /** insert data into the table: "races" */
  insert_races?: Maybe<RacesMutationResponse>;
  /** insert a single row into the table: "races" */
  insert_races_one?: Maybe<Races>;
  /** insert data into the table: "realtimehorses" */
  insert_realtimehorses?: Maybe<RealtimehorsesMutationResponse>;
  /** insert a single row into the table: "realtimehorses" */
  insert_realtimehorses_one?: Maybe<Realtimehorses>;
  /** insert data into the table: "refunds" */
  insert_refunds?: Maybe<RefundsMutationResponse>;
  /** insert a single row into the table: "refunds" */
  insert_refunds_one?: Maybe<Refunds>;
  /** insert data into the table: "results" */
  insert_results?: Maybe<ResultsMutationResponse>;
  /** insert a single row into the table: "results" */
  insert_results_one?: Maybe<Results>;
  /** insert data into the table: "rotation_result" */
  insert_rotation_result?: Maybe<RotationResultMutationResponse>;
  /** insert a single row into the table: "rotation_result" */
  insert_rotation_result_one?: Maybe<RotationResult>;
  /** insert data into the table: "running_horses" */
  insert_running_horses?: Maybe<RunningHorsesMutationResponse>;
  /** insert a single row into the table: "running_horses" */
  insert_running_horses_one?: Maybe<RunningHorses>;
  /** insert data into the table: "trainers" */
  insert_trainers?: Maybe<TrainersMutationResponse>;
  /** insert a single row into the table: "trainers" */
  insert_trainers_one?: Maybe<Trainers>;
  /** insert data into the table: "trainings" */
  insert_trainings?: Maybe<TrainingsMutationResponse>;
  /** insert a single row into the table: "trainings" */
  insert_trainings_one?: Maybe<Trainings>;
  /** update data of the table: "blogs" */
  updateBlogs?: Maybe<BlogsMutationResponse>;
  /** update data of the table: "baba_result_summary_mart" */
  update_baba_result_summary_mart?: Maybe<BabaResultSummaryMartMutationResponse>;
  /** update data of the table: "babas" */
  update_babas?: Maybe<BabasMutationResponse>;
  /** update single row of the table: "babas" */
  update_babas_by_pk?: Maybe<Babas>;
  /** update single row of the table: "blogs" */
  update_blogs_by_pk?: Maybe<Blogs>;
  /** update data of the table: "course_result_summary_mart" */
  update_course_result_summary_mart?: Maybe<CourseResultSummaryMartMutationResponse>;
  /** update data of the table: "distance_result_summary_mart" */
  update_distance_result_summary_mart?: Maybe<DistanceResultSummaryMartMutationResponse>;
  /** update data of the table: "holdings" */
  update_holdings?: Maybe<HoldingsMutationResponse>;
  /** update single row of the table: "holdings" */
  update_holdings_by_pk?: Maybe<Holdings>;
  /** update data of the table: "horse_num_count" */
  update_horse_num_count?: Maybe<HorseNumCountMutationResponse>;
  /** update single row of the table: "horse_num_count" */
  update_horse_num_count_by_pk?: Maybe<HorseNumCount>;
  /** update data of the table: "horses" */
  update_horses?: Maybe<HorsesMutationResponse>;
  /** update single row of the table: "horses" */
  update_horses_by_pk?: Maybe<Horses>;
  /** update data of the table: "jockeys" */
  update_jockeys?: Maybe<JockeysMutationResponse>;
  /** update single row of the table: "jockeys" */
  update_jockeys_by_pk?: Maybe<Jockeys>;
  /** update data of the table: "legqualities" */
  update_legqualities?: Maybe<LegqualitiesMutationResponse>;
  /** update single row of the table: "legqualities" */
  update_legqualities_by_pk?: Maybe<Legqualities>;
  /** update data of the table: "lineages" */
  update_lineages?: Maybe<LineagesMutationResponse>;
  /** update single row of the table: "lineages" */
  update_lineages_by_pk?: Maybe<Lineages>;
  /** update data of the table: "places" */
  update_places?: Maybe<PlacesMutationResponse>;
  /** update single row of the table: "places" */
  update_places_by_pk?: Maybe<Places>;
  /** update data of the table: "race_result_mart" */
  update_race_result_mart?: Maybe<RaceResultMartMutationResponse>;
  /** update data of the table: "races" */
  update_races?: Maybe<RacesMutationResponse>;
  /** update single row of the table: "races" */
  update_races_by_pk?: Maybe<Races>;
  /** update data of the table: "realtimehorses" */
  update_realtimehorses?: Maybe<RealtimehorsesMutationResponse>;
  /** update single row of the table: "realtimehorses" */
  update_realtimehorses_by_pk?: Maybe<Realtimehorses>;
  /** update data of the table: "refunds" */
  update_refunds?: Maybe<RefundsMutationResponse>;
  /** update single row of the table: "refunds" */
  update_refunds_by_pk?: Maybe<Refunds>;
  /** update data of the table: "results" */
  update_results?: Maybe<ResultsMutationResponse>;
  /** update single row of the table: "results" */
  update_results_by_pk?: Maybe<Results>;
  /** update data of the table: "rotation_result" */
  update_rotation_result?: Maybe<RotationResultMutationResponse>;
  /** update single row of the table: "rotation_result" */
  update_rotation_result_by_pk?: Maybe<RotationResult>;
  /** update data of the table: "running_horses" */
  update_running_horses?: Maybe<RunningHorsesMutationResponse>;
  /** update single row of the table: "running_horses" */
  update_running_horses_by_pk?: Maybe<RunningHorses>;
  /** update data of the table: "trainers" */
  update_trainers?: Maybe<TrainersMutationResponse>;
  /** update data of the table: "trainings" */
  update_trainings?: Maybe<TrainingsMutationResponse>;
  /** update single row of the table: "trainings" */
  update_trainings_by_pk?: Maybe<Trainings>;
};

/** mutation root */
export type MutationRootDeleteBlogsArgs = {
  where: BlogsBoolExp;
};

/** mutation root */
export type MutationRootDeleteBabaResultSummaryMartArgs = {
  where: BabaResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootDeleteBabasArgs = {
  where: BabasBoolExp;
};

/** mutation root */
export type MutationRootDeleteBabasByPkArgs = {
  baba_id: Scalars["Int"];
};

/** mutation root */
export type MutationRootDeleteBlogsByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteCourseResultSummaryMartArgs = {
  where: CourseResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootDeleteDistanceResultSummaryMartArgs = {
  where: DistanceResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootDeleteHoldingsArgs = {
  where: HoldingsBoolExp;
};

/** mutation root */
export type MutationRootDeleteHoldingsByPkArgs = {
  holding_key: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteHorseNumCountArgs = {
  where: HorseNumCountBoolExp;
};

/** mutation root */
export type MutationRootDeleteHorseNumCountByPkArgs = {
  common_race_name: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteHorsesArgs = {
  where: HorsesBoolExp;
};

/** mutation root */
export type MutationRootDeleteHorsesByPkArgs = {
  pedigree_register: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteJockeysArgs = {
  where: JockeysBoolExp;
};

/** mutation root */
export type MutationRootDeleteJockeysByPkArgs = {
  jockey_code: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteLegqualitiesArgs = {
  where: LegqualitiesBoolExp;
};

/** mutation root */
export type MutationRootDeleteLegqualitiesByPkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type MutationRootDeleteLineagesArgs = {
  where: LineagesBoolExp;
};

/** mutation root */
export type MutationRootDeleteLineagesByPkArgs = {
  code: Scalars["Int"];
};

/** mutation root */
export type MutationRootDeletePlacesArgs = {
  where: PlacesBoolExp;
};

/** mutation root */
export type MutationRootDeletePlacesByPkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type MutationRootDeleteRaceResultMartArgs = {
  where: RaceResultMartBoolExp;
};

/** mutation root */
export type MutationRootDeleteRacesArgs = {
  where: RacesBoolExp;
};

/** mutation root */
export type MutationRootDeleteRacesByPkArgs = {
  race_key: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteRealtimehorsesArgs = {
  where: RealtimehorsesBoolExp;
};

/** mutation root */
export type MutationRootDeleteRealtimehorsesByPkArgs = {
  realtimehorse_id: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteRefundsArgs = {
  where: RefundsBoolExp;
};

/** mutation root */
export type MutationRootDeleteRefundsByPkArgs = {
  race_key: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteResultsArgs = {
  where: ResultsBoolExp;
};

/** mutation root */
export type MutationRootDeleteResultsByPkArgs = {
  result_id: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteRotationResultArgs = {
  where: RotationResultBoolExp;
};

/** mutation root */
export type MutationRootDeleteRotationResultByPkArgs = {
  common_race_name: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteRunningHorsesArgs = {
  where: RunningHorsesBoolExp;
};

/** mutation root */
export type MutationRootDeleteRunningHorsesByPkArgs = {
  race_key: Scalars["String"];
};

/** mutation root */
export type MutationRootDeleteTrainersArgs = {
  where: TrainersBoolExp;
};

/** mutation root */
export type MutationRootDeleteTrainingsArgs = {
  where: TrainingsBoolExp;
};

/** mutation root */
export type MutationRootDeleteTrainingsByPkArgs = {
  training_id: Scalars["String"];
};

/** mutation root */
export type MutationRootInsertBlogsArgs = {
  objects: Array<BlogsInsertInput>;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** mutation root */
export type MutationRootInsertBabaResultSummaryMartArgs = {
  objects: Array<BabaResultSummaryMartInsertInput>;
};

/** mutation root */
export type MutationRootInsertBabaResultSummaryMartOneArgs = {
  object: BabaResultSummaryMartInsertInput;
};

/** mutation root */
export type MutationRootInsertBabasArgs = {
  objects: Array<BabasInsertInput>;
  on_conflict?: Maybe<BabasOnConflict>;
};

/** mutation root */
export type MutationRootInsertBabasOneArgs = {
  object: BabasInsertInput;
  on_conflict?: Maybe<BabasOnConflict>;
};

/** mutation root */
export type MutationRootInsertBlogsOneArgs = {
  object: BlogsInsertInput;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCourseResultSummaryMartArgs = {
  objects: Array<CourseResultSummaryMartInsertInput>;
};

/** mutation root */
export type MutationRootInsertCourseResultSummaryMartOneArgs = {
  object: CourseResultSummaryMartInsertInput;
};

/** mutation root */
export type MutationRootInsertDistanceResultSummaryMartArgs = {
  objects: Array<DistanceResultSummaryMartInsertInput>;
};

/** mutation root */
export type MutationRootInsertDistanceResultSummaryMartOneArgs = {
  object: DistanceResultSummaryMartInsertInput;
};

/** mutation root */
export type MutationRootInsertHoldingsArgs = {
  objects: Array<HoldingsInsertInput>;
  on_conflict?: Maybe<HoldingsOnConflict>;
};

/** mutation root */
export type MutationRootInsertHoldingsOneArgs = {
  object: HoldingsInsertInput;
  on_conflict?: Maybe<HoldingsOnConflict>;
};

/** mutation root */
export type MutationRootInsertHorseNumCountArgs = {
  objects: Array<HorseNumCountInsertInput>;
  on_conflict?: Maybe<HorseNumCountOnConflict>;
};

/** mutation root */
export type MutationRootInsertHorseNumCountOneArgs = {
  object: HorseNumCountInsertInput;
  on_conflict?: Maybe<HorseNumCountOnConflict>;
};

/** mutation root */
export type MutationRootInsertHorsesArgs = {
  objects: Array<HorsesInsertInput>;
  on_conflict?: Maybe<HorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertHorsesOneArgs = {
  object: HorsesInsertInput;
  on_conflict?: Maybe<HorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertJockeysArgs = {
  objects: Array<JockeysInsertInput>;
  on_conflict?: Maybe<JockeysOnConflict>;
};

/** mutation root */
export type MutationRootInsertJockeysOneArgs = {
  object: JockeysInsertInput;
  on_conflict?: Maybe<JockeysOnConflict>;
};

/** mutation root */
export type MutationRootInsertLegqualitiesArgs = {
  objects: Array<LegqualitiesInsertInput>;
  on_conflict?: Maybe<LegqualitiesOnConflict>;
};

/** mutation root */
export type MutationRootInsertLegqualitiesOneArgs = {
  object: LegqualitiesInsertInput;
  on_conflict?: Maybe<LegqualitiesOnConflict>;
};

/** mutation root */
export type MutationRootInsertLineagesArgs = {
  objects: Array<LineagesInsertInput>;
  on_conflict?: Maybe<LineagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertLineagesOneArgs = {
  object: LineagesInsertInput;
  on_conflict?: Maybe<LineagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertPlacesArgs = {
  objects: Array<PlacesInsertInput>;
  on_conflict?: Maybe<PlacesOnConflict>;
};

/** mutation root */
export type MutationRootInsertPlacesOneArgs = {
  object: PlacesInsertInput;
  on_conflict?: Maybe<PlacesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRaceResultMartArgs = {
  objects: Array<RaceResultMartInsertInput>;
};

/** mutation root */
export type MutationRootInsertRaceResultMartOneArgs = {
  object: RaceResultMartInsertInput;
};

/** mutation root */
export type MutationRootInsertRacesArgs = {
  objects: Array<RacesInsertInput>;
  on_conflict?: Maybe<RacesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRacesOneArgs = {
  object: RacesInsertInput;
  on_conflict?: Maybe<RacesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealtimehorsesArgs = {
  objects: Array<RealtimehorsesInsertInput>;
  on_conflict?: Maybe<RealtimehorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealtimehorsesOneArgs = {
  object: RealtimehorsesInsertInput;
  on_conflict?: Maybe<RealtimehorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefundsArgs = {
  objects: Array<RefundsInsertInput>;
  on_conflict?: Maybe<RefundsOnConflict>;
};

/** mutation root */
export type MutationRootInsertRefundsOneArgs = {
  object: RefundsInsertInput;
  on_conflict?: Maybe<RefundsOnConflict>;
};

/** mutation root */
export type MutationRootInsertResultsArgs = {
  objects: Array<ResultsInsertInput>;
  on_conflict?: Maybe<ResultsOnConflict>;
};

/** mutation root */
export type MutationRootInsertResultsOneArgs = {
  object: ResultsInsertInput;
  on_conflict?: Maybe<ResultsOnConflict>;
};

/** mutation root */
export type MutationRootInsertRotationResultArgs = {
  objects: Array<RotationResultInsertInput>;
  on_conflict?: Maybe<RotationResultOnConflict>;
};

/** mutation root */
export type MutationRootInsertRotationResultOneArgs = {
  object: RotationResultInsertInput;
  on_conflict?: Maybe<RotationResultOnConflict>;
};

/** mutation root */
export type MutationRootInsertRunningHorsesArgs = {
  objects: Array<RunningHorsesInsertInput>;
  on_conflict?: Maybe<RunningHorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertRunningHorsesOneArgs = {
  object: RunningHorsesInsertInput;
  on_conflict?: Maybe<RunningHorsesOnConflict>;
};

/** mutation root */
export type MutationRootInsertTrainersArgs = {
  objects: Array<TrainersInsertInput>;
  on_conflict?: Maybe<TrainersOnConflict>;
};

/** mutation root */
export type MutationRootInsertTrainersOneArgs = {
  object: TrainersInsertInput;
  on_conflict?: Maybe<TrainersOnConflict>;
};

/** mutation root */
export type MutationRootInsertTrainingsArgs = {
  objects: Array<TrainingsInsertInput>;
  on_conflict?: Maybe<TrainingsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTrainingsOneArgs = {
  object: TrainingsInsertInput;
  on_conflict?: Maybe<TrainingsOnConflict>;
};

/** mutation root */
export type MutationRootUpdateBlogsArgs = {
  _set?: Maybe<BlogsSetInput>;
  where: BlogsBoolExp;
};

/** mutation root */
export type MutationRootUpdateBabaResultSummaryMartArgs = {
  _inc?: Maybe<BabaResultSummaryMartIncInput>;
  _set?: Maybe<BabaResultSummaryMartSetInput>;
  where: BabaResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootUpdateBabasArgs = {
  _inc?: Maybe<BabasIncInput>;
  _set?: Maybe<BabasSetInput>;
  where: BabasBoolExp;
};

/** mutation root */
export type MutationRootUpdateBabasByPkArgs = {
  _inc?: Maybe<BabasIncInput>;
  _set?: Maybe<BabasSetInput>;
  pk_columns: BabasPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateBlogsByPkArgs = {
  _set?: Maybe<BlogsSetInput>;
  pk_columns: BlogsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCourseResultSummaryMartArgs = {
  _inc?: Maybe<CourseResultSummaryMartIncInput>;
  _set?: Maybe<CourseResultSummaryMartSetInput>;
  where: CourseResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootUpdateDistanceResultSummaryMartArgs = {
  _inc?: Maybe<DistanceResultSummaryMartIncInput>;
  _set?: Maybe<DistanceResultSummaryMartSetInput>;
  where: DistanceResultSummaryMartBoolExp;
};

/** mutation root */
export type MutationRootUpdateHoldingsArgs = {
  _inc?: Maybe<HoldingsIncInput>;
  _set?: Maybe<HoldingsSetInput>;
  where: HoldingsBoolExp;
};

/** mutation root */
export type MutationRootUpdateHoldingsByPkArgs = {
  _inc?: Maybe<HoldingsIncInput>;
  _set?: Maybe<HoldingsSetInput>;
  pk_columns: HoldingsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateHorseNumCountArgs = {
  _inc?: Maybe<HorseNumCountIncInput>;
  _set?: Maybe<HorseNumCountSetInput>;
  where: HorseNumCountBoolExp;
};

/** mutation root */
export type MutationRootUpdateHorseNumCountByPkArgs = {
  _inc?: Maybe<HorseNumCountIncInput>;
  _set?: Maybe<HorseNumCountSetInput>;
  pk_columns: HorseNumCountPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateHorsesArgs = {
  _inc?: Maybe<HorsesIncInput>;
  _set?: Maybe<HorsesSetInput>;
  where: HorsesBoolExp;
};

/** mutation root */
export type MutationRootUpdateHorsesByPkArgs = {
  _inc?: Maybe<HorsesIncInput>;
  _set?: Maybe<HorsesSetInput>;
  pk_columns: HorsesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateJockeysArgs = {
  _inc?: Maybe<JockeysIncInput>;
  _set?: Maybe<JockeysSetInput>;
  where: JockeysBoolExp;
};

/** mutation root */
export type MutationRootUpdateJockeysByPkArgs = {
  _inc?: Maybe<JockeysIncInput>;
  _set?: Maybe<JockeysSetInput>;
  pk_columns: JockeysPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateLegqualitiesArgs = {
  _inc?: Maybe<LegqualitiesIncInput>;
  _set?: Maybe<LegqualitiesSetInput>;
  where: LegqualitiesBoolExp;
};

/** mutation root */
export type MutationRootUpdateLegqualitiesByPkArgs = {
  _inc?: Maybe<LegqualitiesIncInput>;
  _set?: Maybe<LegqualitiesSetInput>;
  pk_columns: LegqualitiesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateLineagesArgs = {
  _inc?: Maybe<LineagesIncInput>;
  _set?: Maybe<LineagesSetInput>;
  where: LineagesBoolExp;
};

/** mutation root */
export type MutationRootUpdateLineagesByPkArgs = {
  _inc?: Maybe<LineagesIncInput>;
  _set?: Maybe<LineagesSetInput>;
  pk_columns: LineagesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePlacesArgs = {
  _inc?: Maybe<PlacesIncInput>;
  _set?: Maybe<PlacesSetInput>;
  where: PlacesBoolExp;
};

/** mutation root */
export type MutationRootUpdatePlacesByPkArgs = {
  _inc?: Maybe<PlacesIncInput>;
  _set?: Maybe<PlacesSetInput>;
  pk_columns: PlacesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRaceResultMartArgs = {
  _inc?: Maybe<RaceResultMartIncInput>;
  _set?: Maybe<RaceResultMartSetInput>;
  where: RaceResultMartBoolExp;
};

/** mutation root */
export type MutationRootUpdateRacesArgs = {
  _inc?: Maybe<RacesIncInput>;
  _set?: Maybe<RacesSetInput>;
  where: RacesBoolExp;
};

/** mutation root */
export type MutationRootUpdateRacesByPkArgs = {
  _inc?: Maybe<RacesIncInput>;
  _set?: Maybe<RacesSetInput>;
  pk_columns: RacesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRealtimehorsesArgs = {
  _inc?: Maybe<RealtimehorsesIncInput>;
  _set?: Maybe<RealtimehorsesSetInput>;
  where: RealtimehorsesBoolExp;
};

/** mutation root */
export type MutationRootUpdateRealtimehorsesByPkArgs = {
  _inc?: Maybe<RealtimehorsesIncInput>;
  _set?: Maybe<RealtimehorsesSetInput>;
  pk_columns: RealtimehorsesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRefundsArgs = {
  _inc?: Maybe<RefundsIncInput>;
  _set?: Maybe<RefundsSetInput>;
  where: RefundsBoolExp;
};

/** mutation root */
export type MutationRootUpdateRefundsByPkArgs = {
  _inc?: Maybe<RefundsIncInput>;
  _set?: Maybe<RefundsSetInput>;
  pk_columns: RefundsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateResultsArgs = {
  _inc?: Maybe<ResultsIncInput>;
  _set?: Maybe<ResultsSetInput>;
  where: ResultsBoolExp;
};

/** mutation root */
export type MutationRootUpdateResultsByPkArgs = {
  _inc?: Maybe<ResultsIncInput>;
  _set?: Maybe<ResultsSetInput>;
  pk_columns: ResultsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRotationResultArgs = {
  _inc?: Maybe<RotationResultIncInput>;
  _set?: Maybe<RotationResultSetInput>;
  where: RotationResultBoolExp;
};

/** mutation root */
export type MutationRootUpdateRotationResultByPkArgs = {
  _inc?: Maybe<RotationResultIncInput>;
  _set?: Maybe<RotationResultSetInput>;
  pk_columns: RotationResultPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRunningHorsesArgs = {
  _inc?: Maybe<RunningHorsesIncInput>;
  _set?: Maybe<RunningHorsesSetInput>;
  where: RunningHorsesBoolExp;
};

/** mutation root */
export type MutationRootUpdateRunningHorsesByPkArgs = {
  _inc?: Maybe<RunningHorsesIncInput>;
  _set?: Maybe<RunningHorsesSetInput>;
  pk_columns: RunningHorsesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTrainersArgs = {
  _inc?: Maybe<TrainersIncInput>;
  _set?: Maybe<TrainersSetInput>;
  where: TrainersBoolExp;
};

/** mutation root */
export type MutationRootUpdateTrainingsArgs = {
  _inc?: Maybe<TrainingsIncInput>;
  _set?: Maybe<TrainingsSetInput>;
  where: TrainingsBoolExp;
};

/** mutation root */
export type MutationRootUpdateTrainingsByPkArgs = {
  _inc?: Maybe<TrainingsIncInput>;
  _set?: Maybe<TrainingsSetInput>;
  pk_columns: TrainingsPkColumnsInput;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  ASC = "asc",
  /** in the ascending order, nulls first */
  ASC_NULLS_FIRST = "asc_nulls_first",
  /** in the ascending order, nulls last */
  ASC_NULLS_LAST = "asc_nulls_last",
  /** in the descending order, nulls first */
  DESC = "desc",
  /** in the descending order, nulls first */
  DESC_NULLS_FIRST = "desc_nulls_first",
  /** in the descending order, nulls last */
  DESC_NULLS_LAST = "desc_nulls_last",
}

/** columns and relationships of "places" */
export type Places = {
  __typename?: "places";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "places" */
export type PlacesAggregate = {
  __typename?: "places_aggregate";
  aggregate?: Maybe<PlacesAggregateFields>;
  nodes: Array<Places>;
};

/** aggregate fields of "places" */
export type PlacesAggregateFields = {
  __typename?: "places_aggregate_fields";
  avg?: Maybe<PlacesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<PlacesMaxFields>;
  min?: Maybe<PlacesMinFields>;
  stddev?: Maybe<PlacesStddevFields>;
  stddev_pop?: Maybe<PlacesStddevPopFields>;
  stddev_samp?: Maybe<PlacesStddevSampFields>;
  sum?: Maybe<PlacesSumFields>;
  var_pop?: Maybe<PlacesVarPopFields>;
  var_samp?: Maybe<PlacesVarSampFields>;
  variance?: Maybe<PlacesVarianceFields>;
};

/** aggregate fields of "places" */
export type PlacesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PlacesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "places" */
export type PlacesAggregateOrderBy = {
  avg?: Maybe<PlacesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PlacesMaxOrderBy>;
  min?: Maybe<PlacesMinOrderBy>;
  stddev?: Maybe<PlacesStddevOrderBy>;
  stddev_pop?: Maybe<PlacesStddevPopOrderBy>;
  stddev_samp?: Maybe<PlacesStddevSampOrderBy>;
  sum?: Maybe<PlacesSumOrderBy>;
  var_pop?: Maybe<PlacesVarPopOrderBy>;
  var_samp?: Maybe<PlacesVarSampOrderBy>;
  variance?: Maybe<PlacesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "places" */
export type PlacesArrRelInsertInput = {
  data: Array<PlacesInsertInput>;
  on_conflict?: Maybe<PlacesOnConflict>;
};

/** aggregate avg on columns */
export type PlacesAvgFields = {
  __typename?: "places_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "places" */
export type PlacesAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'. */
export type PlacesBoolExp = {
  _and?: Maybe<Array<Maybe<PlacesBoolExp>>>;
  _not?: Maybe<PlacesBoolExp>;
  _or?: Maybe<Array<Maybe<PlacesBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "places" */
export enum PlacesConstraint {
  /** unique or primary key constraint */
  PLACES_PKEY = "places_pkey",
}

/** input type for incrementing integer column in table "places" */
export type PlacesIncInput = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "places" */
export type PlacesInsertInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type PlacesMaxFields = {
  __typename?: "places_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "places" */
export type PlacesMaxOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PlacesMinFields = {
  __typename?: "places_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "places" */
export type PlacesMinOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "places" */
export type PlacesMutationResponse = {
  __typename?: "places_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Places>;
};

/** input type for inserting object relation for remote table "places" */
export type PlacesObjRelInsertInput = {
  data: PlacesInsertInput;
  on_conflict?: Maybe<PlacesOnConflict>;
};

/** on conflict condition type for table "places" */
export type PlacesOnConflict = {
  constraint: PlacesConstraint;
  update_columns: Array<PlacesUpdateColumn>;
  where?: Maybe<PlacesBoolExp>;
};

/** ordering options when selecting data from "places" */
export type PlacesOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "places" */
export type PlacesPkColumnsInput = {
  id: Scalars["Int"];
};

/** select columns of table "places" */
export enum PlacesSelectColumn {
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
}

/** input type for updating data in table "places" */
export type PlacesSetInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type PlacesStddevFields = {
  __typename?: "places_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "places" */
export type PlacesStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PlacesStddevPopFields = {
  __typename?: "places_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "places" */
export type PlacesStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PlacesStddevSampFields = {
  __typename?: "places_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "places" */
export type PlacesStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PlacesSumFields = {
  __typename?: "places_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "places" */
export type PlacesSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "places" */
export enum PlacesUpdateColumn {
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
}

/** aggregate var_pop on columns */
export type PlacesVarPopFields = {
  __typename?: "places_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "places" */
export type PlacesVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PlacesVarSampFields = {
  __typename?: "places_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "places" */
export type PlacesVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PlacesVarianceFields = {
  __typename?: "places_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "places" */
export type PlacesVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** query root */
export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "baba_result_summary_mart" */
  baba_result_summary_mart: Array<BabaResultSummaryMart>;
  /** fetch aggregated fields from the table: "baba_result_summary_mart" */
  baba_result_summary_mart_aggregate: BabaResultSummaryMartAggregate;
  /** fetch data from the table: "babas" */
  babas: Array<Babas>;
  /** fetch aggregated fields from the table: "babas" */
  babas_aggregate: BabasAggregate;
  /** fetch data from the table: "babas" using primary key columns */
  babas_by_pk?: Maybe<Babas>;
  /** fetch data from the table: "blogs" using primary key columns */
  blog?: Maybe<Blogs>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogsAggregate: BlogsAggregate;
  /** fetch data from the table: "course_result_summary_mart" */
  course_result_summary_mart: Array<CourseResultSummaryMart>;
  /** fetch aggregated fields from the table: "course_result_summary_mart" */
  course_result_summary_mart_aggregate: CourseResultSummaryMartAggregate;
  /** fetch data from the table: "distance_result_summary_mart" */
  distance_result_summary_mart: Array<DistanceResultSummaryMart>;
  /** fetch aggregated fields from the table: "distance_result_summary_mart" */
  distance_result_summary_mart_aggregate: DistanceResultSummaryMartAggregate;
  /** fetch data from the table: "holdings" */
  holdings: Array<Holdings>;
  /** fetch aggregated fields from the table: "holdings" */
  holdings_aggregate: HoldingsAggregate;
  /** fetch data from the table: "holdings" using primary key columns */
  holdings_by_pk?: Maybe<Holdings>;
  /** fetch data from the table: "horse_num_count" */
  horse_num_count: Array<HorseNumCount>;
  /** fetch aggregated fields from the table: "horse_num_count" */
  horse_num_count_aggregate: HorseNumCountAggregate;
  /** fetch data from the table: "horse_num_count" using primary key columns */
  horse_num_count_by_pk?: Maybe<HorseNumCount>;
  /** fetch data from the table: "horses" */
  horses: Array<Horses>;
  /** fetch aggregated fields from the table: "horses" */
  horses_aggregate: HorsesAggregate;
  /** fetch data from the table: "horses" using primary key columns */
  horses_by_pk?: Maybe<Horses>;
  /** fetch data from the table: "jockeys" */
  jockeys: Array<Jockeys>;
  /** fetch aggregated fields from the table: "jockeys" */
  jockeys_aggregate: JockeysAggregate;
  /** fetch data from the table: "jockeys" using primary key columns */
  jockeys_by_pk?: Maybe<Jockeys>;
  /** fetch data from the table: "legqualities" */
  legqualities: Array<Legqualities>;
  /** fetch aggregated fields from the table: "legqualities" */
  legqualities_aggregate: LegqualitiesAggregate;
  /** fetch data from the table: "legqualities" using primary key columns */
  legqualities_by_pk?: Maybe<Legqualities>;
  /** fetch data from the table: "lineages" */
  lineages: Array<Lineages>;
  /** fetch aggregated fields from the table: "lineages" */
  lineages_aggregate: LineagesAggregate;
  /** fetch data from the table: "lineages" using primary key columns */
  lineages_by_pk?: Maybe<Lineages>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: PlacesAggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table: "race_result_mart" */
  race_result_mart: Array<RaceResultMart>;
  /** fetch aggregated fields from the table: "race_result_mart" */
  race_result_mart_aggregate: RaceResultMartAggregate;
  /** fetch data from the table: "races" */
  races: Array<Races>;
  /** fetch aggregated fields from the table: "races" */
  races_aggregate: RacesAggregate;
  /** fetch data from the table: "races" using primary key columns */
  races_by_pk?: Maybe<Races>;
  /** fetch data from the table: "realtimehorses" */
  realtimehorses: Array<Realtimehorses>;
  /** fetch aggregated fields from the table: "realtimehorses" */
  realtimehorses_aggregate: RealtimehorsesAggregate;
  /** fetch data from the table: "realtimehorses" using primary key columns */
  realtimehorses_by_pk?: Maybe<Realtimehorses>;
  /** fetch data from the table: "refunds" */
  refunds: Array<Refunds>;
  /** fetch aggregated fields from the table: "refunds" */
  refunds_aggregate: RefundsAggregate;
  /** fetch data from the table: "refunds" using primary key columns */
  refunds_by_pk?: Maybe<Refunds>;
  /** fetch data from the table: "results" */
  results: Array<Results>;
  /** fetch aggregated fields from the table: "results" */
  results_aggregate: ResultsAggregate;
  /** fetch data from the table: "results" using primary key columns */
  results_by_pk?: Maybe<Results>;
  /** fetch data from the table: "rotation_result" */
  rotation_result: Array<RotationResult>;
  /** fetch aggregated fields from the table: "rotation_result" */
  rotation_result_aggregate: RotationResultAggregate;
  /** fetch data from the table: "rotation_result" using primary key columns */
  rotation_result_by_pk?: Maybe<RotationResult>;
  /** fetch data from the table: "running_horses" */
  running_horses: Array<RunningHorses>;
  /** fetch aggregated fields from the table: "running_horses" */
  running_horses_aggregate: RunningHorsesAggregate;
  /** fetch data from the table: "running_horses" using primary key columns */
  running_horses_by_pk?: Maybe<RunningHorses>;
  /** execute function "search_race_horse_num_count" which returns "horse_num_count" */
  search_race_horse_num_count: Array<HorseNumCount>;
  /** execute function "search_race_horse_num_count" and query aggregates on result of table type "horse_num_count" */
  search_race_horse_num_count_aggregate: HorseNumCountAggregate;
  /** execute function "search_rotation_count" which returns "rotation_result" */
  search_rotation_count: Array<RotationResult>;
  /** execute function "search_rotation_count" and query aggregates on result of table type "rotation_result" */
  search_rotation_count_aggregate: RotationResultAggregate;
  /** execute function "search_running_horses" which returns "running_horses" */
  search_running_horses: Array<RunningHorses>;
  /** execute function "search_running_horses" and query aggregates on result of table type "running_horses" */
  search_running_horses_aggregate: RunningHorsesAggregate;
  /** fetch data from the table: "trainers" */
  trainers: Array<Trainers>;
  /** fetch aggregated fields from the table: "trainers" */
  trainers_aggregate: TrainersAggregate;
  /** fetch data from the table: "trainings" */
  trainings: Array<Trainings>;
  /** fetch aggregated fields from the table: "trainings" */
  trainings_aggregate: TrainingsAggregate;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
};

/** query root */
export type QueryRootBabaResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<BabaResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabaResultSummaryMartOrderBy>>;
  where?: Maybe<BabaResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootBabaResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<BabaResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabaResultSummaryMartOrderBy>>;
  where?: Maybe<BabaResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootBabasArgs = {
  distinct_on?: Maybe<Array<BabasSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabasOrderBy>>;
  where?: Maybe<BabasBoolExp>;
};

/** query root */
export type QueryRootBabasAggregateArgs = {
  distinct_on?: Maybe<Array<BabasSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabasOrderBy>>;
  where?: Maybe<BabasBoolExp>;
};

/** query root */
export type QueryRootBabasByPkArgs = {
  baba_id: Scalars["Int"];
};

/** query root */
export type QueryRootBlogArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootBlogsArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};

/** query root */
export type QueryRootBlogsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};

/** query root */
export type QueryRootCourseResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<CourseResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CourseResultSummaryMartOrderBy>>;
  where?: Maybe<CourseResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootCourseResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<CourseResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CourseResultSummaryMartOrderBy>>;
  where?: Maybe<CourseResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootDistanceResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<DistanceResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<DistanceResultSummaryMartOrderBy>>;
  where?: Maybe<DistanceResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootDistanceResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<DistanceResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<DistanceResultSummaryMartOrderBy>>;
  where?: Maybe<DistanceResultSummaryMartBoolExp>;
};

/** query root */
export type QueryRootHoldingsArgs = {
  distinct_on?: Maybe<Array<HoldingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HoldingsOrderBy>>;
  where?: Maybe<HoldingsBoolExp>;
};

/** query root */
export type QueryRootHoldingsAggregateArgs = {
  distinct_on?: Maybe<Array<HoldingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HoldingsOrderBy>>;
  where?: Maybe<HoldingsBoolExp>;
};

/** query root */
export type QueryRootHoldingsByPkArgs = {
  holding_key: Scalars["String"];
};

/** query root */
export type QueryRootHorseNumCountArgs = {
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** query root */
export type QueryRootHorseNumCountAggregateArgs = {
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** query root */
export type QueryRootHorseNumCountByPkArgs = {
  common_race_name: Scalars["String"];
};

/** query root */
export type QueryRootHorsesArgs = {
  distinct_on?: Maybe<Array<HorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorsesOrderBy>>;
  where?: Maybe<HorsesBoolExp>;
};

/** query root */
export type QueryRootHorsesAggregateArgs = {
  distinct_on?: Maybe<Array<HorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorsesOrderBy>>;
  where?: Maybe<HorsesBoolExp>;
};

/** query root */
export type QueryRootHorsesByPkArgs = {
  pedigree_register: Scalars["String"];
};

/** query root */
export type QueryRootJockeysArgs = {
  distinct_on?: Maybe<Array<JockeysSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<JockeysOrderBy>>;
  where?: Maybe<JockeysBoolExp>;
};

/** query root */
export type QueryRootJockeysAggregateArgs = {
  distinct_on?: Maybe<Array<JockeysSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<JockeysOrderBy>>;
  where?: Maybe<JockeysBoolExp>;
};

/** query root */
export type QueryRootJockeysByPkArgs = {
  jockey_code: Scalars["String"];
};

/** query root */
export type QueryRootLegqualitiesArgs = {
  distinct_on?: Maybe<Array<LegqualitiesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LegqualitiesOrderBy>>;
  where?: Maybe<LegqualitiesBoolExp>;
};

/** query root */
export type QueryRootLegqualitiesAggregateArgs = {
  distinct_on?: Maybe<Array<LegqualitiesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LegqualitiesOrderBy>>;
  where?: Maybe<LegqualitiesBoolExp>;
};

/** query root */
export type QueryRootLegqualitiesByPkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type QueryRootLineagesArgs = {
  distinct_on?: Maybe<Array<LineagesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LineagesOrderBy>>;
  where?: Maybe<LineagesBoolExp>;
};

/** query root */
export type QueryRootLineagesAggregateArgs = {
  distinct_on?: Maybe<Array<LineagesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LineagesOrderBy>>;
  where?: Maybe<LineagesBoolExp>;
};

/** query root */
export type QueryRootLineagesByPkArgs = {
  code: Scalars["Int"];
};

/** query root */
export type QueryRootPlacesArgs = {
  distinct_on?: Maybe<Array<PlacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PlacesOrderBy>>;
  where?: Maybe<PlacesBoolExp>;
};

/** query root */
export type QueryRootPlacesAggregateArgs = {
  distinct_on?: Maybe<Array<PlacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PlacesOrderBy>>;
  where?: Maybe<PlacesBoolExp>;
};

/** query root */
export type QueryRootPlacesByPkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type QueryRootRaceResultMartArgs = {
  distinct_on?: Maybe<Array<RaceResultMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RaceResultMartOrderBy>>;
  where?: Maybe<RaceResultMartBoolExp>;
};

/** query root */
export type QueryRootRaceResultMartAggregateArgs = {
  distinct_on?: Maybe<Array<RaceResultMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RaceResultMartOrderBy>>;
  where?: Maybe<RaceResultMartBoolExp>;
};

/** query root */
export type QueryRootRacesArgs = {
  distinct_on?: Maybe<Array<RacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RacesOrderBy>>;
  where?: Maybe<RacesBoolExp>;
};

/** query root */
export type QueryRootRacesAggregateArgs = {
  distinct_on?: Maybe<Array<RacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RacesOrderBy>>;
  where?: Maybe<RacesBoolExp>;
};

/** query root */
export type QueryRootRacesByPkArgs = {
  race_key: Scalars["String"];
};

/** query root */
export type QueryRootRealtimehorsesArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** query root */
export type QueryRootRealtimehorsesAggregateArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** query root */
export type QueryRootRealtimehorsesByPkArgs = {
  realtimehorse_id: Scalars["String"];
};

/** query root */
export type QueryRootRefundsArgs = {
  distinct_on?: Maybe<Array<RefundsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RefundsOrderBy>>;
  where?: Maybe<RefundsBoolExp>;
};

/** query root */
export type QueryRootRefundsAggregateArgs = {
  distinct_on?: Maybe<Array<RefundsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RefundsOrderBy>>;
  where?: Maybe<RefundsBoolExp>;
};

/** query root */
export type QueryRootRefundsByPkArgs = {
  race_key: Scalars["String"];
};

/** query root */
export type QueryRootResultsArgs = {
  distinct_on?: Maybe<Array<ResultsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ResultsOrderBy>>;
  where?: Maybe<ResultsBoolExp>;
};

/** query root */
export type QueryRootResultsAggregateArgs = {
  distinct_on?: Maybe<Array<ResultsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ResultsOrderBy>>;
  where?: Maybe<ResultsBoolExp>;
};

/** query root */
export type QueryRootResultsByPkArgs = {
  result_id: Scalars["String"];
};

/** query root */
export type QueryRootRotationResultArgs = {
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** query root */
export type QueryRootRotationResultAggregateArgs = {
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** query root */
export type QueryRootRotationResultByPkArgs = {
  common_race_name: Scalars["String"];
};

/** query root */
export type QueryRootRunningHorsesArgs = {
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** query root */
export type QueryRootRunningHorsesAggregateArgs = {
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** query root */
export type QueryRootRunningHorsesByPkArgs = {
  race_key: Scalars["String"];
};

/** query root */
export type QueryRootSearchRaceHorseNumCountArgs = {
  args: SearchRaceHorseNumCountArgs;
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** query root */
export type QueryRootSearchRaceHorseNumCountAggregateArgs = {
  args: SearchRaceHorseNumCountArgs;
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** query root */
export type QueryRootSearchRotationCountArgs = {
  args: SearchRotationCountArgs;
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** query root */
export type QueryRootSearchRotationCountAggregateArgs = {
  args: SearchRotationCountArgs;
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** query root */
export type QueryRootSearchRunningHorsesArgs = {
  args: SearchRunningHorsesArgs;
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** query root */
export type QueryRootSearchRunningHorsesAggregateArgs = {
  args: SearchRunningHorsesArgs;
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** query root */
export type QueryRootTrainersArgs = {
  distinct_on?: Maybe<Array<TrainersSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainersOrderBy>>;
  where?: Maybe<TrainersBoolExp>;
};

/** query root */
export type QueryRootTrainersAggregateArgs = {
  distinct_on?: Maybe<Array<TrainersSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainersOrderBy>>;
  where?: Maybe<TrainersBoolExp>;
};

/** query root */
export type QueryRootTrainingsArgs = {
  distinct_on?: Maybe<Array<TrainingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainingsOrderBy>>;
  where?: Maybe<TrainingsBoolExp>;
};

/** query root */
export type QueryRootTrainingsAggregateArgs = {
  distinct_on?: Maybe<Array<TrainingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainingsOrderBy>>;
  where?: Maybe<TrainingsBoolExp>;
};

/** query root */
export type QueryRootTrainingsByPkArgs = {
  training_id: Scalars["String"];
};

/** columns and relationships of "race_result_mart" */
export type RaceResultMart = {
  __typename?: "race_result_mart";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "race_result_mart" */
export type RaceResultMartAggregate = {
  __typename?: "race_result_mart_aggregate";
  aggregate?: Maybe<RaceResultMartAggregateFields>;
  nodes: Array<RaceResultMart>;
};

/** aggregate fields of "race_result_mart" */
export type RaceResultMartAggregateFields = {
  __typename?: "race_result_mart_aggregate_fields";
  avg?: Maybe<RaceResultMartAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RaceResultMartMaxFields>;
  min?: Maybe<RaceResultMartMinFields>;
  stddev?: Maybe<RaceResultMartStddevFields>;
  stddev_pop?: Maybe<RaceResultMartStddevPopFields>;
  stddev_samp?: Maybe<RaceResultMartStddevSampFields>;
  sum?: Maybe<RaceResultMartSumFields>;
  var_pop?: Maybe<RaceResultMartVarPopFields>;
  var_samp?: Maybe<RaceResultMartVarSampFields>;
  variance?: Maybe<RaceResultMartVarianceFields>;
};

/** aggregate fields of "race_result_mart" */
export type RaceResultMartAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RaceResultMartSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "race_result_mart" */
export type RaceResultMartAggregateOrderBy = {
  avg?: Maybe<RaceResultMartAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RaceResultMartMaxOrderBy>;
  min?: Maybe<RaceResultMartMinOrderBy>;
  stddev?: Maybe<RaceResultMartStddevOrderBy>;
  stddev_pop?: Maybe<RaceResultMartStddevPopOrderBy>;
  stddev_samp?: Maybe<RaceResultMartStddevSampOrderBy>;
  sum?: Maybe<RaceResultMartSumOrderBy>;
  var_pop?: Maybe<RaceResultMartVarPopOrderBy>;
  var_samp?: Maybe<RaceResultMartVarSampOrderBy>;
  variance?: Maybe<RaceResultMartVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "race_result_mart" */
export type RaceResultMartArrRelInsertInput = {
  data: Array<RaceResultMartInsertInput>;
};

/** aggregate avg on columns */
export type RaceResultMartAvgFields = {
  __typename?: "race_result_mart_avg_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "race_result_mart" */
export type RaceResultMartAvgOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "race_result_mart". All fields are combined with a logical 'AND'. */
export type RaceResultMartBoolExp = {
  _and?: Maybe<Array<Maybe<RaceResultMartBoolExp>>>;
  _not?: Maybe<RaceResultMartBoolExp>;
  _or?: Maybe<Array<Maybe<RaceResultMartBoolExp>>>;
  c_baba_condition?: Maybe<StringComparisonExp>;
  c_basis_weight?: Maybe<NumericComparisonExp>;
  c_race_time?: Maybe<NumericComparisonExp>;
  c_result_rank?: Maybe<NumericComparisonExp>;
  c_result_rank_divide?: Maybe<IntComparisonExp>;
  c_track_type?: Maybe<StringComparisonExp>;
  date?: Maybe<StringComparisonExp>;
  distance?: Maybe<IntComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  place_name?: Maybe<StringComparisonExp>;
  race_name?: Maybe<StringComparisonExp>;
};

/** input type for incrementing integer column in table "race_result_mart" */
export type RaceResultMartIncInput = {
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  distance?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "race_result_mart" */
export type RaceResultMartInsertInput = {
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type RaceResultMartMaxFields = {
  __typename?: "race_result_mart_max_fields";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "race_result_mart" */
export type RaceResultMartMaxOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RaceResultMartMinFields = {
  __typename?: "race_result_mart_min_fields";
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "race_result_mart" */
export type RaceResultMartMinOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "race_result_mart" */
export type RaceResultMartMutationResponse = {
  __typename?: "race_result_mart_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<RaceResultMart>;
};

/** input type for inserting object relation for remote table "race_result_mart" */
export type RaceResultMartObjRelInsertInput = {
  data: RaceResultMartInsertInput;
};

/** ordering options when selecting data from "race_result_mart" */
export type RaceResultMartOrderBy = {
  c_baba_condition?: Maybe<OrderBy>;
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  c_track_type?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  place_name?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
};

/** select columns of table "race_result_mart" */
export enum RaceResultMartSelectColumn {
  /** column name */
  C_BABA_CONDITION = "c_baba_condition",
  /** column name */
  C_BASIS_WEIGHT = "c_basis_weight",
  /** column name */
  C_RACE_TIME = "c_race_time",
  /** column name */
  C_RESULT_RANK = "c_result_rank",
  /** column name */
  C_RESULT_RANK_DIVIDE = "c_result_rank_divide",
  /** column name */
  C_TRACK_TYPE = "c_track_type",
  /** column name */
  DATE = "date",
  /** column name */
  DISTANCE = "distance",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  PLACE_NAME = "place_name",
  /** column name */
  RACE_NAME = "race_name",
}

/** input type for updating data in table "race_result_mart" */
export type RaceResultMartSetInput = {
  c_baba_condition?: Maybe<Scalars["String"]>;
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  c_track_type?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  place_name?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type RaceResultMartStddevFields = {
  __typename?: "race_result_mart_stddev_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "race_result_mart" */
export type RaceResultMartStddevOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RaceResultMartStddevPopFields = {
  __typename?: "race_result_mart_stddev_pop_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "race_result_mart" */
export type RaceResultMartStddevPopOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RaceResultMartStddevSampFields = {
  __typename?: "race_result_mart_stddev_samp_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "race_result_mart" */
export type RaceResultMartStddevSampOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RaceResultMartSumFields = {
  __typename?: "race_result_mart_sum_fields";
  c_basis_weight?: Maybe<Scalars["numeric"]>;
  c_race_time?: Maybe<Scalars["numeric"]>;
  c_result_rank?: Maybe<Scalars["numeric"]>;
  c_result_rank_divide?: Maybe<Scalars["Int"]>;
  distance?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "race_result_mart" */
export type RaceResultMartSumOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type RaceResultMartVarPopFields = {
  __typename?: "race_result_mart_var_pop_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "race_result_mart" */
export type RaceResultMartVarPopOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RaceResultMartVarSampFields = {
  __typename?: "race_result_mart_var_samp_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "race_result_mart" */
export type RaceResultMartVarSampOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RaceResultMartVarianceFields = {
  __typename?: "race_result_mart_variance_fields";
  c_basis_weight?: Maybe<Scalars["Float"]>;
  c_race_time?: Maybe<Scalars["Float"]>;
  c_result_rank?: Maybe<Scalars["Float"]>;
  c_result_rank_divide?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "race_result_mart" */
export type RaceResultMartVarianceOrderBy = {
  c_basis_weight?: Maybe<OrderBy>;
  c_race_time?: Maybe<OrderBy>;
  c_result_rank?: Maybe<OrderBy>;
  c_result_rank_divide?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
};

/** columns and relationships of "races" */
export type Races = {
  __typename?: "races";
  course?: Maybe<Scalars["String"]>;
  data_partition?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["String"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_condition?: Maybe<Scalars["String"]>;
  race_count?: Maybe<Scalars["String"]>;
  race_day?: Maybe<Scalars["String"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_key: Scalars["String"];
  race_name?: Maybe<Scalars["String"]>;
  race_name_aka?: Maybe<Scalars["String"]>;
  race_name_common?: Maybe<Scalars["String"]>;
  race_sign?: Maybe<Scalars["String"]>;
  race_time?: Maybe<Scalars["String"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  /** An array relationship */
  realtimehorses: Array<Realtimehorses>;
  /** An aggregated array relationship */
  realtimehorses_aggregate: RealtimehorsesAggregate;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "races" */
export type RacesRealtimehorsesArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** columns and relationships of "races" */
export type RacesRealtimehorsesAggregateArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** aggregated selection of "races" */
export type RacesAggregate = {
  __typename?: "races_aggregate";
  aggregate?: Maybe<RacesAggregateFields>;
  nodes: Array<Races>;
};

/** aggregate fields of "races" */
export type RacesAggregateFields = {
  __typename?: "races_aggregate_fields";
  avg?: Maybe<RacesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RacesMaxFields>;
  min?: Maybe<RacesMinFields>;
  stddev?: Maybe<RacesStddevFields>;
  stddev_pop?: Maybe<RacesStddevPopFields>;
  stddev_samp?: Maybe<RacesStddevSampFields>;
  sum?: Maybe<RacesSumFields>;
  var_pop?: Maybe<RacesVarPopFields>;
  var_samp?: Maybe<RacesVarSampFields>;
  variance?: Maybe<RacesVarianceFields>;
};

/** aggregate fields of "races" */
export type RacesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RacesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "races" */
export type RacesAggregateOrderBy = {
  avg?: Maybe<RacesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RacesMaxOrderBy>;
  min?: Maybe<RacesMinOrderBy>;
  stddev?: Maybe<RacesStddevOrderBy>;
  stddev_pop?: Maybe<RacesStddevPopOrderBy>;
  stddev_samp?: Maybe<RacesStddevSampOrderBy>;
  sum?: Maybe<RacesSumOrderBy>;
  var_pop?: Maybe<RacesVarPopOrderBy>;
  var_samp?: Maybe<RacesVarSampOrderBy>;
  variance?: Maybe<RacesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "races" */
export type RacesArrRelInsertInput = {
  data: Array<RacesInsertInput>;
  on_conflict?: Maybe<RacesOnConflict>;
};

/** aggregate avg on columns */
export type RacesAvgFields = {
  __typename?: "races_avg_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "races" */
export type RacesAvgOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "races". All fields are combined with a logical 'AND'. */
export type RacesBoolExp = {
  _and?: Maybe<Array<Maybe<RacesBoolExp>>>;
  _not?: Maybe<RacesBoolExp>;
  _or?: Maybe<Array<Maybe<RacesBoolExp>>>;
  course?: Maybe<StringComparisonExp>;
  data_partition?: Maybe<StringComparisonExp>;
  distance?: Maybe<IntComparisonExp>;
  fifth_prize?: Maybe<IntComparisonExp>;
  first_budget_cash_prize?: Maybe<IntComparisonExp>;
  first_prize?: Maybe<IntComparisonExp>;
  forth_prize?: Maybe<IntComparisonExp>;
  head_count?: Maybe<IntComparisonExp>;
  holding_key?: Maybe<StringComparisonExp>;
  holding_partition?: Maybe<StringComparisonExp>;
  in_out?: Maybe<IntComparisonExp>;
  place_code?: Maybe<IntComparisonExp>;
  race_condition?: Maybe<StringComparisonExp>;
  race_count?: Maybe<StringComparisonExp>;
  race_day?: Maybe<StringComparisonExp>;
  race_grade?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
  race_name?: Maybe<StringComparisonExp>;
  race_name_aka?: Maybe<StringComparisonExp>;
  race_name_common?: Maybe<StringComparisonExp>;
  race_sign?: Maybe<StringComparisonExp>;
  race_time?: Maybe<StringComparisonExp>;
  race_type?: Maybe<IntComparisonExp>;
  race_weight?: Maybe<IntComparisonExp>;
  realtimehorses?: Maybe<RealtimehorsesBoolExp>;
  right_left?: Maybe<IntComparisonExp>;
  second_budget_cash_prize?: Maybe<IntComparisonExp>;
  second_prize?: Maybe<IntComparisonExp>;
  third_prize?: Maybe<IntComparisonExp>;
  track_type_code?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "races" */
export enum RacesConstraint {
  /** unique or primary key constraint */
  RACES_PKEY = "races_pkey",
}

/** input type for incrementing integer column in table "races" */
export type RacesIncInput = {
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "races" */
export type RacesInsertInput = {
  course?: Maybe<Scalars["String"]>;
  data_partition?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["String"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_condition?: Maybe<Scalars["String"]>;
  race_count?: Maybe<Scalars["String"]>;
  race_day?: Maybe<Scalars["String"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
  race_name_aka?: Maybe<Scalars["String"]>;
  race_name_common?: Maybe<Scalars["String"]>;
  race_sign?: Maybe<Scalars["String"]>;
  race_time?: Maybe<Scalars["String"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  realtimehorses?: Maybe<RealtimehorsesArrRelInsertInput>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type RacesMaxFields = {
  __typename?: "races_max_fields";
  course?: Maybe<Scalars["String"]>;
  data_partition?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["String"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_condition?: Maybe<Scalars["String"]>;
  race_count?: Maybe<Scalars["String"]>;
  race_day?: Maybe<Scalars["String"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
  race_name_aka?: Maybe<Scalars["String"]>;
  race_name_common?: Maybe<Scalars["String"]>;
  race_sign?: Maybe<Scalars["String"]>;
  race_time?: Maybe<Scalars["String"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "races" */
export type RacesMaxOrderBy = {
  course?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_condition?: Maybe<OrderBy>;
  race_count?: Maybe<OrderBy>;
  race_day?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
  race_name_aka?: Maybe<OrderBy>;
  race_name_common?: Maybe<OrderBy>;
  race_sign?: Maybe<OrderBy>;
  race_time?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RacesMinFields = {
  __typename?: "races_min_fields";
  course?: Maybe<Scalars["String"]>;
  data_partition?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["String"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_condition?: Maybe<Scalars["String"]>;
  race_count?: Maybe<Scalars["String"]>;
  race_day?: Maybe<Scalars["String"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
  race_name_aka?: Maybe<Scalars["String"]>;
  race_name_common?: Maybe<Scalars["String"]>;
  race_sign?: Maybe<Scalars["String"]>;
  race_time?: Maybe<Scalars["String"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "races" */
export type RacesMinOrderBy = {
  course?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_condition?: Maybe<OrderBy>;
  race_count?: Maybe<OrderBy>;
  race_day?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
  race_name_aka?: Maybe<OrderBy>;
  race_name_common?: Maybe<OrderBy>;
  race_sign?: Maybe<OrderBy>;
  race_time?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** response of any mutation on the table "races" */
export type RacesMutationResponse = {
  __typename?: "races_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Races>;
};

/** input type for inserting object relation for remote table "races" */
export type RacesObjRelInsertInput = {
  data: RacesInsertInput;
  on_conflict?: Maybe<RacesOnConflict>;
};

/** on conflict condition type for table "races" */
export type RacesOnConflict = {
  constraint: RacesConstraint;
  update_columns: Array<RacesUpdateColumn>;
  where?: Maybe<RacesBoolExp>;
};

/** ordering options when selecting data from "races" */
export type RacesOrderBy = {
  course?: Maybe<OrderBy>;
  data_partition?: Maybe<OrderBy>;
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  holding_key?: Maybe<OrderBy>;
  holding_partition?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_condition?: Maybe<OrderBy>;
  race_count?: Maybe<OrderBy>;
  race_day?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_name?: Maybe<OrderBy>;
  race_name_aka?: Maybe<OrderBy>;
  race_name_common?: Maybe<OrderBy>;
  race_sign?: Maybe<OrderBy>;
  race_time?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  realtimehorses_aggregate?: Maybe<RealtimehorsesAggregateOrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** primary key columns input for table: "races" */
export type RacesPkColumnsInput = {
  race_key: Scalars["String"];
};

/** select columns of table "races" */
export enum RacesSelectColumn {
  /** column name */
  COURSE = "course",
  /** column name */
  DATA_PARTITION = "data_partition",
  /** column name */
  DISTANCE = "distance",
  /** column name */
  FIFTH_PRIZE = "fifth_prize",
  /** column name */
  FIRST_BUDGET_CASH_PRIZE = "first_budget_cash_prize",
  /** column name */
  FIRST_PRIZE = "first_prize",
  /** column name */
  FORTH_PRIZE = "forth_prize",
  /** column name */
  HEAD_COUNT = "head_count",
  /** column name */
  HOLDING_KEY = "holding_key",
  /** column name */
  HOLDING_PARTITION = "holding_partition",
  /** column name */
  IN_OUT = "in_out",
  /** column name */
  PLACE_CODE = "place_code",
  /** column name */
  RACE_CONDITION = "race_condition",
  /** column name */
  RACE_COUNT = "race_count",
  /** column name */
  RACE_DAY = "race_day",
  /** column name */
  RACE_GRADE = "race_grade",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  RACE_NAME = "race_name",
  /** column name */
  RACE_NAME_AKA = "race_name_aka",
  /** column name */
  RACE_NAME_COMMON = "race_name_common",
  /** column name */
  RACE_SIGN = "race_sign",
  /** column name */
  RACE_TIME = "race_time",
  /** column name */
  RACE_TYPE = "race_type",
  /** column name */
  RACE_WEIGHT = "race_weight",
  /** column name */
  RIGHT_LEFT = "right_left",
  /** column name */
  SECOND_BUDGET_CASH_PRIZE = "second_budget_cash_prize",
  /** column name */
  SECOND_PRIZE = "second_prize",
  /** column name */
  THIRD_PRIZE = "third_prize",
  /** column name */
  TRACK_TYPE_CODE = "track_type_code",
}

/** input type for updating data in table "races" */
export type RacesSetInput = {
  course?: Maybe<Scalars["String"]>;
  data_partition?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  holding_key?: Maybe<Scalars["String"]>;
  holding_partition?: Maybe<Scalars["String"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_condition?: Maybe<Scalars["String"]>;
  race_count?: Maybe<Scalars["String"]>;
  race_day?: Maybe<Scalars["String"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_name?: Maybe<Scalars["String"]>;
  race_name_aka?: Maybe<Scalars["String"]>;
  race_name_common?: Maybe<Scalars["String"]>;
  race_sign?: Maybe<Scalars["String"]>;
  race_time?: Maybe<Scalars["String"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type RacesStddevFields = {
  __typename?: "races_stddev_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "races" */
export type RacesStddevOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RacesStddevPopFields = {
  __typename?: "races_stddev_pop_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "races" */
export type RacesStddevPopOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RacesStddevSampFields = {
  __typename?: "races_stddev_samp_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "races" */
export type RacesStddevSampOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RacesSumFields = {
  __typename?: "races_sum_fields";
  distance?: Maybe<Scalars["Int"]>;
  fifth_prize?: Maybe<Scalars["Int"]>;
  first_budget_cash_prize?: Maybe<Scalars["Int"]>;
  first_prize?: Maybe<Scalars["Int"]>;
  forth_prize?: Maybe<Scalars["Int"]>;
  head_count?: Maybe<Scalars["Int"]>;
  in_out?: Maybe<Scalars["Int"]>;
  place_code?: Maybe<Scalars["Int"]>;
  race_grade?: Maybe<Scalars["Int"]>;
  race_type?: Maybe<Scalars["Int"]>;
  race_weight?: Maybe<Scalars["Int"]>;
  right_left?: Maybe<Scalars["Int"]>;
  second_budget_cash_prize?: Maybe<Scalars["Int"]>;
  second_prize?: Maybe<Scalars["Int"]>;
  third_prize?: Maybe<Scalars["Int"]>;
  track_type_code?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "races" */
export type RacesSumOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** update columns of table "races" */
export enum RacesUpdateColumn {
  /** column name */
  COURSE = "course",
  /** column name */
  DATA_PARTITION = "data_partition",
  /** column name */
  DISTANCE = "distance",
  /** column name */
  FIFTH_PRIZE = "fifth_prize",
  /** column name */
  FIRST_BUDGET_CASH_PRIZE = "first_budget_cash_prize",
  /** column name */
  FIRST_PRIZE = "first_prize",
  /** column name */
  FORTH_PRIZE = "forth_prize",
  /** column name */
  HEAD_COUNT = "head_count",
  /** column name */
  HOLDING_KEY = "holding_key",
  /** column name */
  HOLDING_PARTITION = "holding_partition",
  /** column name */
  IN_OUT = "in_out",
  /** column name */
  PLACE_CODE = "place_code",
  /** column name */
  RACE_CONDITION = "race_condition",
  /** column name */
  RACE_COUNT = "race_count",
  /** column name */
  RACE_DAY = "race_day",
  /** column name */
  RACE_GRADE = "race_grade",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  RACE_NAME = "race_name",
  /** column name */
  RACE_NAME_AKA = "race_name_aka",
  /** column name */
  RACE_NAME_COMMON = "race_name_common",
  /** column name */
  RACE_SIGN = "race_sign",
  /** column name */
  RACE_TIME = "race_time",
  /** column name */
  RACE_TYPE = "race_type",
  /** column name */
  RACE_WEIGHT = "race_weight",
  /** column name */
  RIGHT_LEFT = "right_left",
  /** column name */
  SECOND_BUDGET_CASH_PRIZE = "second_budget_cash_prize",
  /** column name */
  SECOND_PRIZE = "second_prize",
  /** column name */
  THIRD_PRIZE = "third_prize",
  /** column name */
  TRACK_TYPE_CODE = "track_type_code",
}

/** aggregate var_pop on columns */
export type RacesVarPopFields = {
  __typename?: "races_var_pop_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "races" */
export type RacesVarPopOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RacesVarSampFields = {
  __typename?: "races_var_samp_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "races" */
export type RacesVarSampOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RacesVarianceFields = {
  __typename?: "races_variance_fields";
  distance?: Maybe<Scalars["Float"]>;
  fifth_prize?: Maybe<Scalars["Float"]>;
  first_budget_cash_prize?: Maybe<Scalars["Float"]>;
  first_prize?: Maybe<Scalars["Float"]>;
  forth_prize?: Maybe<Scalars["Float"]>;
  head_count?: Maybe<Scalars["Float"]>;
  in_out?: Maybe<Scalars["Float"]>;
  place_code?: Maybe<Scalars["Float"]>;
  race_grade?: Maybe<Scalars["Float"]>;
  race_type?: Maybe<Scalars["Float"]>;
  race_weight?: Maybe<Scalars["Float"]>;
  right_left?: Maybe<Scalars["Float"]>;
  second_budget_cash_prize?: Maybe<Scalars["Float"]>;
  second_prize?: Maybe<Scalars["Float"]>;
  third_prize?: Maybe<Scalars["Float"]>;
  track_type_code?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "races" */
export type RacesVarianceOrderBy = {
  distance?: Maybe<OrderBy>;
  fifth_prize?: Maybe<OrderBy>;
  first_budget_cash_prize?: Maybe<OrderBy>;
  first_prize?: Maybe<OrderBy>;
  forth_prize?: Maybe<OrderBy>;
  head_count?: Maybe<OrderBy>;
  in_out?: Maybe<OrderBy>;
  place_code?: Maybe<OrderBy>;
  race_grade?: Maybe<OrderBy>;
  race_type?: Maybe<OrderBy>;
  race_weight?: Maybe<OrderBy>;
  right_left?: Maybe<OrderBy>;
  second_budget_cash_prize?: Maybe<OrderBy>;
  second_prize?: Maybe<OrderBy>;
  third_prize?: Maybe<OrderBy>;
  track_type_code?: Maybe<OrderBy>;
};

/** columns and relationships of "realtimehorses" */
export type Realtimehorses = {
  __typename?: "realtimehorses";
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  body_type?: Maybe<Scalars["String"]>;
  body_type_total_one?: Maybe<Scalars["String"]>;
  body_type_total_three?: Maybe<Scalars["String"]>;
  body_type_total_two?: Maybe<Scalars["String"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_entrance?: Maybe<Scalars["String"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  distance_aptitude_two?: Maybe<Scalars["String"]>;
  expansion_symbol?: Maybe<Scalars["String"]>;
  flag?: Maybe<Scalars["String"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  grazing_destination?: Maybe<Scalars["String"]>;
  grazing_destination_rank?: Maybe<Scalars["String"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["String"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_special_mention_one?: Maybe<Scalars["String"]>;
  horse_special_mention_three?: Maybe<Scalars["String"]>;
  horse_special_mention_two?: Maybe<Scalars["String"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pace_forecast?: Maybe<Scalars["String"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  realtimehorse_id: Scalars["String"];
  rest_reason_code?: Maybe<Scalars["String"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  run_type?: Maybe<Scalars["String"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  rushing_type?: Maybe<Scalars["String"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  transport_class?: Maybe<Scalars["String"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  weight_confirm_inc_dec?: Maybe<Scalars["String"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "realtimehorses" */
export type RealtimehorsesAggregate = {
  __typename?: "realtimehorses_aggregate";
  aggregate?: Maybe<RealtimehorsesAggregateFields>;
  nodes: Array<Realtimehorses>;
};

/** aggregate fields of "realtimehorses" */
export type RealtimehorsesAggregateFields = {
  __typename?: "realtimehorses_aggregate_fields";
  avg?: Maybe<RealtimehorsesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RealtimehorsesMaxFields>;
  min?: Maybe<RealtimehorsesMinFields>;
  stddev?: Maybe<RealtimehorsesStddevFields>;
  stddev_pop?: Maybe<RealtimehorsesStddevPopFields>;
  stddev_samp?: Maybe<RealtimehorsesStddevSampFields>;
  sum?: Maybe<RealtimehorsesSumFields>;
  var_pop?: Maybe<RealtimehorsesVarPopFields>;
  var_samp?: Maybe<RealtimehorsesVarSampFields>;
  variance?: Maybe<RealtimehorsesVarianceFields>;
};

/** aggregate fields of "realtimehorses" */
export type RealtimehorsesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RealtimehorsesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "realtimehorses" */
export type RealtimehorsesAggregateOrderBy = {
  avg?: Maybe<RealtimehorsesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RealtimehorsesMaxOrderBy>;
  min?: Maybe<RealtimehorsesMinOrderBy>;
  stddev?: Maybe<RealtimehorsesStddevOrderBy>;
  stddev_pop?: Maybe<RealtimehorsesStddevPopOrderBy>;
  stddev_samp?: Maybe<RealtimehorsesStddevSampOrderBy>;
  sum?: Maybe<RealtimehorsesSumOrderBy>;
  var_pop?: Maybe<RealtimehorsesVarPopOrderBy>;
  var_samp?: Maybe<RealtimehorsesVarSampOrderBy>;
  variance?: Maybe<RealtimehorsesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "realtimehorses" */
export type RealtimehorsesArrRelInsertInput = {
  data: Array<RealtimehorsesInsertInput>;
  on_conflict?: Maybe<RealtimehorsesOnConflict>;
};

/** aggregate avg on columns */
export type RealtimehorsesAvgFields = {
  __typename?: "realtimehorses_avg_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "realtimehorses" */
export type RealtimehorsesAvgOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "realtimehorses". All fields are combined with a logical 'AND'. */
export type RealtimehorsesBoolExp = {
  _and?: Maybe<Array<Maybe<RealtimehorsesBoolExp>>>;
  _not?: Maybe<RealtimehorsesBoolExp>;
  _or?: Maybe<Array<Maybe<RealtimehorsesBoolExp>>>;
  after_three_f_diff?: Maybe<IntComparisonExp>;
  after_three_f_in_out?: Maybe<IntComparisonExp>;
  after_three_f_rank?: Maybe<IntComparisonExp>;
  apprentice_class?: Maybe<IntComparisonExp>;
  basis_weight?: Maybe<IntComparisonExp>;
  blinker?: Maybe<IntComparisonExp>;
  body_type?: Maybe<StringComparisonExp>;
  body_type_total_one?: Maybe<StringComparisonExp>;
  body_type_total_three?: Maybe<StringComparisonExp>;
  body_type_total_two?: Maybe<StringComparisonExp>;
  border_num?: Maybe<IntComparisonExp>;
  cancel_flag?: Maybe<IntComparisonExp>;
  class_code?: Maybe<IntComparisonExp>;
  condition_class?: Maybe<IntComparisonExp>;
  dart_suitability_code?: Maybe<IntComparisonExp>;
  day_entrance?: Maybe<StringComparisonExp>;
  day_num_from_entrance?: Maybe<IntComparisonExp>;
  degree_flag?: Maybe<IntComparisonExp>;
  distance_aptitude?: Maybe<IntComparisonExp>;
  distance_aptitude_two?: Maybe<StringComparisonExp>;
  expansion_symbol?: Maybe<StringComparisonExp>;
  flag?: Maybe<StringComparisonExp>;
  goal_diff?: Maybe<IntComparisonExp>;
  goal_in_out?: Maybe<IntComparisonExp>;
  goal_rank?: Maybe<IntComparisonExp>;
  grazing_destination?: Maybe<StringComparisonExp>;
  grazing_destination_rank?: Maybe<StringComparisonExp>;
  heavy_aptitude_code?: Maybe<IntComparisonExp>;
  hoof_code?: Maybe<IntComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  horse_num?: Maybe<IntComparisonExp>;
  horse_sign_code?: Maybe<StringComparisonExp>;
  horse_slow_start_rate?: Maybe<FloatComparisonExp>;
  horse_special_mention_one?: Maybe<StringComparisonExp>;
  horse_special_mention_three?: Maybe<StringComparisonExp>;
  horse_special_mention_two?: Maybe<StringComparisonExp>;
  horse_start_index?: Maybe<FloatComparisonExp>;
  idm?: Maybe<FloatComparisonExp>;
  idm_sign?: Maybe<IntComparisonExp>;
  in_out_way?: Maybe<IntComparisonExp>;
  income_prize?: Maybe<IntComparisonExp>;
  info_index?: Maybe<FloatComparisonExp>;
  info_sign?: Maybe<IntComparisonExp>;
  jockey_code?: Maybe<IntComparisonExp>;
  jockey_ex_co_rate?: Maybe<FloatComparisonExp>;
  jockey_expec_three_rid_rate?: Maybe<FloatComparisonExp>;
  jockey_expec_v_rate?: Maybe<FloatComparisonExp>;
  jockey_index?: Maybe<FloatComparisonExp>;
  jockey_sign?: Maybe<IntComparisonExp>;
  leg_quality?: Maybe<IntComparisonExp>;
  ls_index_rank?: Maybe<IntComparisonExp>;
  multi_win_odds?: Maybe<FloatComparisonExp>;
  multi_win_popularity?: Maybe<IntComparisonExp>;
  odds?: Maybe<FloatComparisonExp>;
  owner_group_code?: Maybe<IntComparisonExp>;
  owner_name?: Maybe<StringComparisonExp>;
  pace_forecast?: Maybe<StringComparisonExp>;
  pace_index?: Maybe<FloatComparisonExp>;
  pace_index_rank?: Maybe<IntComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  popularity?: Maybe<IntComparisonExp>;
  popularity_index?: Maybe<IntComparisonExp>;
  position_index?: Maybe<FloatComparisonExp>;
  position_index_rank?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
  realtimehorse_id?: Maybe<StringComparisonExp>;
  rest_reason_code?: Maybe<StringComparisonExp>;
  rising_degree?: Maybe<IntComparisonExp>;
  rising_index?: Maybe<FloatComparisonExp>;
  rising_index_rank?: Maybe<IntComparisonExp>;
  rotation?: Maybe<IntComparisonExp>;
  run_num_from_entrance?: Maybe<IntComparisonExp>;
  run_type?: Maybe<StringComparisonExp>;
  rushing_index?: Maybe<IntComparisonExp>;
  rushing_rank?: Maybe<IntComparisonExp>;
  rushing_sign?: Maybe<IntComparisonExp>;
  rushing_type?: Maybe<StringComparisonExp>;
  sex_code?: Maybe<IntComparisonExp>;
  specific_info_bt?: Maybe<IntComparisonExp>;
  specific_info_bu?: Maybe<IntComparisonExp>;
  specific_info_c?: Maybe<IntComparisonExp>;
  specific_info_dc?: Maybe<IntComparisonExp>;
  specific_info_t?: Maybe<IntComparisonExp>;
  stable_eval_code?: Maybe<IntComparisonExp>;
  stable_index?: Maybe<FloatComparisonExp>;
  stable_rank?: Maybe<IntComparisonExp>;
  stable_sign?: Maybe<IntComparisonExp>;
  ten_index?: Maybe<FloatComparisonExp>;
  ten_index_rank?: Maybe<IntComparisonExp>;
  ticket_index?: Maybe<IntComparisonExp>;
  ticket_sign?: Maybe<IntComparisonExp>;
  total_index?: Maybe<FloatComparisonExp>;
  total_info_bt?: Maybe<IntComparisonExp>;
  total_info_bu?: Maybe<IntComparisonExp>;
  total_info_c?: Maybe<IntComparisonExp>;
  total_info_dc?: Maybe<IntComparisonExp>;
  total_info_t?: Maybe<IntComparisonExp>;
  total_sign?: Maybe<IntComparisonExp>;
  train_allow_code?: Maybe<IntComparisonExp>;
  train_index?: Maybe<FloatComparisonExp>;
  train_sign?: Maybe<IntComparisonExp>;
  trainer_code?: Maybe<IntComparisonExp>;
  transport_class?: Maybe<StringComparisonExp>;
  turf_suitability_code?: Maybe<IntComparisonExp>;
  way_diff?: Maybe<IntComparisonExp>;
  way_order?: Maybe<IntComparisonExp>;
  weight_confirm?: Maybe<IntComparisonExp>;
  weight_confirm_inc_dec?: Maybe<StringComparisonExp>;
  winning_prize?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "realtimehorses" */
export enum RealtimehorsesConstraint {
  /** unique or primary key constraint */
  REALTIMEHORSES_PKEY = "realtimehorses_pkey",
}

/** input type for incrementing integer column in table "realtimehorses" */
export type RealtimehorsesIncInput = {
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "realtimehorses" */
export type RealtimehorsesInsertInput = {
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  body_type?: Maybe<Scalars["String"]>;
  body_type_total_one?: Maybe<Scalars["String"]>;
  body_type_total_three?: Maybe<Scalars["String"]>;
  body_type_total_two?: Maybe<Scalars["String"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_entrance?: Maybe<Scalars["String"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  distance_aptitude_two?: Maybe<Scalars["String"]>;
  expansion_symbol?: Maybe<Scalars["String"]>;
  flag?: Maybe<Scalars["String"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  grazing_destination?: Maybe<Scalars["String"]>;
  grazing_destination_rank?: Maybe<Scalars["String"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["String"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_special_mention_one?: Maybe<Scalars["String"]>;
  horse_special_mention_three?: Maybe<Scalars["String"]>;
  horse_special_mention_two?: Maybe<Scalars["String"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pace_forecast?: Maybe<Scalars["String"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  realtimehorse_id?: Maybe<Scalars["String"]>;
  rest_reason_code?: Maybe<Scalars["String"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  run_type?: Maybe<Scalars["String"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  rushing_type?: Maybe<Scalars["String"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  transport_class?: Maybe<Scalars["String"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  weight_confirm_inc_dec?: Maybe<Scalars["String"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type RealtimehorsesMaxFields = {
  __typename?: "realtimehorses_max_fields";
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  body_type?: Maybe<Scalars["String"]>;
  body_type_total_one?: Maybe<Scalars["String"]>;
  body_type_total_three?: Maybe<Scalars["String"]>;
  body_type_total_two?: Maybe<Scalars["String"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_entrance?: Maybe<Scalars["String"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  distance_aptitude_two?: Maybe<Scalars["String"]>;
  expansion_symbol?: Maybe<Scalars["String"]>;
  flag?: Maybe<Scalars["String"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  grazing_destination?: Maybe<Scalars["String"]>;
  grazing_destination_rank?: Maybe<Scalars["String"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["String"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_special_mention_one?: Maybe<Scalars["String"]>;
  horse_special_mention_three?: Maybe<Scalars["String"]>;
  horse_special_mention_two?: Maybe<Scalars["String"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pace_forecast?: Maybe<Scalars["String"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  realtimehorse_id?: Maybe<Scalars["String"]>;
  rest_reason_code?: Maybe<Scalars["String"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  run_type?: Maybe<Scalars["String"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  rushing_type?: Maybe<Scalars["String"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  transport_class?: Maybe<Scalars["String"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  weight_confirm_inc_dec?: Maybe<Scalars["String"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "realtimehorses" */
export type RealtimehorsesMaxOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  body_type?: Maybe<OrderBy>;
  body_type_total_one?: Maybe<OrderBy>;
  body_type_total_three?: Maybe<OrderBy>;
  body_type_total_two?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_entrance?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  distance_aptitude_two?: Maybe<OrderBy>;
  expansion_symbol?: Maybe<OrderBy>;
  flag?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  grazing_destination?: Maybe<OrderBy>;
  grazing_destination_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_special_mention_one?: Maybe<OrderBy>;
  horse_special_mention_three?: Maybe<OrderBy>;
  horse_special_mention_two?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pace_forecast?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  realtimehorse_id?: Maybe<OrderBy>;
  rest_reason_code?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  run_type?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  rushing_type?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  transport_class?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  weight_confirm_inc_dec?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RealtimehorsesMinFields = {
  __typename?: "realtimehorses_min_fields";
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  body_type?: Maybe<Scalars["String"]>;
  body_type_total_one?: Maybe<Scalars["String"]>;
  body_type_total_three?: Maybe<Scalars["String"]>;
  body_type_total_two?: Maybe<Scalars["String"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_entrance?: Maybe<Scalars["String"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  distance_aptitude_two?: Maybe<Scalars["String"]>;
  expansion_symbol?: Maybe<Scalars["String"]>;
  flag?: Maybe<Scalars["String"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  grazing_destination?: Maybe<Scalars["String"]>;
  grazing_destination_rank?: Maybe<Scalars["String"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["String"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_special_mention_one?: Maybe<Scalars["String"]>;
  horse_special_mention_three?: Maybe<Scalars["String"]>;
  horse_special_mention_two?: Maybe<Scalars["String"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pace_forecast?: Maybe<Scalars["String"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  realtimehorse_id?: Maybe<Scalars["String"]>;
  rest_reason_code?: Maybe<Scalars["String"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  run_type?: Maybe<Scalars["String"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  rushing_type?: Maybe<Scalars["String"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  transport_class?: Maybe<Scalars["String"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  weight_confirm_inc_dec?: Maybe<Scalars["String"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "realtimehorses" */
export type RealtimehorsesMinOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  body_type?: Maybe<OrderBy>;
  body_type_total_one?: Maybe<OrderBy>;
  body_type_total_three?: Maybe<OrderBy>;
  body_type_total_two?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_entrance?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  distance_aptitude_two?: Maybe<OrderBy>;
  expansion_symbol?: Maybe<OrderBy>;
  flag?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  grazing_destination?: Maybe<OrderBy>;
  grazing_destination_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_special_mention_one?: Maybe<OrderBy>;
  horse_special_mention_three?: Maybe<OrderBy>;
  horse_special_mention_two?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pace_forecast?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  realtimehorse_id?: Maybe<OrderBy>;
  rest_reason_code?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  run_type?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  rushing_type?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  transport_class?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  weight_confirm_inc_dec?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** response of any mutation on the table "realtimehorses" */
export type RealtimehorsesMutationResponse = {
  __typename?: "realtimehorses_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Realtimehorses>;
};

/** input type for inserting object relation for remote table "realtimehorses" */
export type RealtimehorsesObjRelInsertInput = {
  data: RealtimehorsesInsertInput;
  on_conflict?: Maybe<RealtimehorsesOnConflict>;
};

/** on conflict condition type for table "realtimehorses" */
export type RealtimehorsesOnConflict = {
  constraint: RealtimehorsesConstraint;
  update_columns: Array<RealtimehorsesUpdateColumn>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** ordering options when selecting data from "realtimehorses" */
export type RealtimehorsesOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  body_type?: Maybe<OrderBy>;
  body_type_total_one?: Maybe<OrderBy>;
  body_type_total_three?: Maybe<OrderBy>;
  body_type_total_two?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_entrance?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  distance_aptitude_two?: Maybe<OrderBy>;
  expansion_symbol?: Maybe<OrderBy>;
  flag?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  grazing_destination?: Maybe<OrderBy>;
  grazing_destination_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_sign_code?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_special_mention_one?: Maybe<OrderBy>;
  horse_special_mention_three?: Maybe<OrderBy>;
  horse_special_mention_two?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  owner_name?: Maybe<OrderBy>;
  pace_forecast?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  realtimehorse_id?: Maybe<OrderBy>;
  rest_reason_code?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  run_type?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  rushing_type?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  transport_class?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  weight_confirm_inc_dec?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** primary key columns input for table: "realtimehorses" */
export type RealtimehorsesPkColumnsInput = {
  realtimehorse_id: Scalars["String"];
};

/** select columns of table "realtimehorses" */
export enum RealtimehorsesSelectColumn {
  /** column name */
  AFTER_THREE_F_DIFF = "after_three_f_diff",
  /** column name */
  AFTER_THREE_F_IN_OUT = "after_three_f_in_out",
  /** column name */
  AFTER_THREE_F_RANK = "after_three_f_rank",
  /** column name */
  APPRENTICE_CLASS = "apprentice_class",
  /** column name */
  BASIS_WEIGHT = "basis_weight",
  /** column name */
  BLINKER = "blinker",
  /** column name */
  BODY_TYPE = "body_type",
  /** column name */
  BODY_TYPE_TOTAL_ONE = "body_type_total_one",
  /** column name */
  BODY_TYPE_TOTAL_THREE = "body_type_total_three",
  /** column name */
  BODY_TYPE_TOTAL_TWO = "body_type_total_two",
  /** column name */
  BORDER_NUM = "border_num",
  /** column name */
  CANCEL_FLAG = "cancel_flag",
  /** column name */
  CLASS_CODE = "class_code",
  /** column name */
  CONDITION_CLASS = "condition_class",
  /** column name */
  DART_SUITABILITY_CODE = "dart_suitability_code",
  /** column name */
  DAY_ENTRANCE = "day_entrance",
  /** column name */
  DAY_NUM_FROM_ENTRANCE = "day_num_from_entrance",
  /** column name */
  DEGREE_FLAG = "degree_flag",
  /** column name */
  DISTANCE_APTITUDE = "distance_aptitude",
  /** column name */
  DISTANCE_APTITUDE_TWO = "distance_aptitude_two",
  /** column name */
  EXPANSION_SYMBOL = "expansion_symbol",
  /** column name */
  FLAG = "flag",
  /** column name */
  GOAL_DIFF = "goal_diff",
  /** column name */
  GOAL_IN_OUT = "goal_in_out",
  /** column name */
  GOAL_RANK = "goal_rank",
  /** column name */
  GRAZING_DESTINATION = "grazing_destination",
  /** column name */
  GRAZING_DESTINATION_RANK = "grazing_destination_rank",
  /** column name */
  HEAVY_APTITUDE_CODE = "heavy_aptitude_code",
  /** column name */
  HOOF_CODE = "hoof_code",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  HORSE_SIGN_CODE = "horse_sign_code",
  /** column name */
  HORSE_SLOW_START_RATE = "horse_slow_start_rate",
  /** column name */
  HORSE_SPECIAL_MENTION_ONE = "horse_special_mention_one",
  /** column name */
  HORSE_SPECIAL_MENTION_THREE = "horse_special_mention_three",
  /** column name */
  HORSE_SPECIAL_MENTION_TWO = "horse_special_mention_two",
  /** column name */
  HORSE_START_INDEX = "horse_start_index",
  /** column name */
  IDM = "idm",
  /** column name */
  IDM_SIGN = "idm_sign",
  /** column name */
  IN_OUT_WAY = "in_out_way",
  /** column name */
  INCOME_PRIZE = "income_prize",
  /** column name */
  INFO_INDEX = "info_index",
  /** column name */
  INFO_SIGN = "info_sign",
  /** column name */
  JOCKEY_CODE = "jockey_code",
  /** column name */
  JOCKEY_EX_CO_RATE = "jockey_ex_co_rate",
  /** column name */
  JOCKEY_EXPEC_THREE_RID_RATE = "jockey_expec_three_rid_rate",
  /** column name */
  JOCKEY_EXPEC_V_RATE = "jockey_expec_v_rate",
  /** column name */
  JOCKEY_INDEX = "jockey_index",
  /** column name */
  JOCKEY_SIGN = "jockey_sign",
  /** column name */
  LEG_QUALITY = "leg_quality",
  /** column name */
  LS_INDEX_RANK = "ls_index_rank",
  /** column name */
  MULTI_WIN_ODDS = "multi_win_odds",
  /** column name */
  MULTI_WIN_POPULARITY = "multi_win_popularity",
  /** column name */
  ODDS = "odds",
  /** column name */
  OWNER_GROUP_CODE = "owner_group_code",
  /** column name */
  OWNER_NAME = "owner_name",
  /** column name */
  PACE_FORECAST = "pace_forecast",
  /** column name */
  PACE_INDEX = "pace_index",
  /** column name */
  PACE_INDEX_RANK = "pace_index_rank",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  POPULARITY = "popularity",
  /** column name */
  POPULARITY_INDEX = "popularity_index",
  /** column name */
  POSITION_INDEX = "position_index",
  /** column name */
  POSITION_INDEX_RANK = "position_index_rank",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  REALTIMEHORSE_ID = "realtimehorse_id",
  /** column name */
  REST_REASON_CODE = "rest_reason_code",
  /** column name */
  RISING_DEGREE = "rising_degree",
  /** column name */
  RISING_INDEX = "rising_index",
  /** column name */
  RISING_INDEX_RANK = "rising_index_rank",
  /** column name */
  ROTATION = "rotation",
  /** column name */
  RUN_NUM_FROM_ENTRANCE = "run_num_from_entrance",
  /** column name */
  RUN_TYPE = "run_type",
  /** column name */
  RUSHING_INDEX = "rushing_index",
  /** column name */
  RUSHING_RANK = "rushing_rank",
  /** column name */
  RUSHING_SIGN = "rushing_sign",
  /** column name */
  RUSHING_TYPE = "rushing_type",
  /** column name */
  SEX_CODE = "sex_code",
  /** column name */
  SPECIFIC_INFO_BT = "specific_info_bt",
  /** column name */
  SPECIFIC_INFO_BU = "specific_info_bu",
  /** column name */
  SPECIFIC_INFO_C = "specific_info_c",
  /** column name */
  SPECIFIC_INFO_DC = "specific_info_dc",
  /** column name */
  SPECIFIC_INFO_T = "specific_info_t",
  /** column name */
  STABLE_EVAL_CODE = "stable_eval_code",
  /** column name */
  STABLE_INDEX = "stable_index",
  /** column name */
  STABLE_RANK = "stable_rank",
  /** column name */
  STABLE_SIGN = "stable_sign",
  /** column name */
  TEN_INDEX = "ten_index",
  /** column name */
  TEN_INDEX_RANK = "ten_index_rank",
  /** column name */
  TICKET_INDEX = "ticket_index",
  /** column name */
  TICKET_SIGN = "ticket_sign",
  /** column name */
  TOTAL_INDEX = "total_index",
  /** column name */
  TOTAL_INFO_BT = "total_info_bt",
  /** column name */
  TOTAL_INFO_BU = "total_info_bu",
  /** column name */
  TOTAL_INFO_C = "total_info_c",
  /** column name */
  TOTAL_INFO_DC = "total_info_dc",
  /** column name */
  TOTAL_INFO_T = "total_info_t",
  /** column name */
  TOTAL_SIGN = "total_sign",
  /** column name */
  TRAIN_ALLOW_CODE = "train_allow_code",
  /** column name */
  TRAIN_INDEX = "train_index",
  /** column name */
  TRAIN_SIGN = "train_sign",
  /** column name */
  TRAINER_CODE = "trainer_code",
  /** column name */
  TRANSPORT_CLASS = "transport_class",
  /** column name */
  TURF_SUITABILITY_CODE = "turf_suitability_code",
  /** column name */
  WAY_DIFF = "way_diff",
  /** column name */
  WAY_ORDER = "way_order",
  /** column name */
  WEIGHT_CONFIRM = "weight_confirm",
  /** column name */
  WEIGHT_CONFIRM_INC_DEC = "weight_confirm_inc_dec",
  /** column name */
  WINNING_PRIZE = "winning_prize",
}

/** input type for updating data in table "realtimehorses" */
export type RealtimehorsesSetInput = {
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  body_type?: Maybe<Scalars["String"]>;
  body_type_total_one?: Maybe<Scalars["String"]>;
  body_type_total_three?: Maybe<Scalars["String"]>;
  body_type_total_two?: Maybe<Scalars["String"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_entrance?: Maybe<Scalars["String"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  distance_aptitude_two?: Maybe<Scalars["String"]>;
  expansion_symbol?: Maybe<Scalars["String"]>;
  flag?: Maybe<Scalars["String"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  grazing_destination?: Maybe<Scalars["String"]>;
  grazing_destination_rank?: Maybe<Scalars["String"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_sign_code?: Maybe<Scalars["String"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_special_mention_one?: Maybe<Scalars["String"]>;
  horse_special_mention_three?: Maybe<Scalars["String"]>;
  horse_special_mention_two?: Maybe<Scalars["String"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  owner_name?: Maybe<Scalars["String"]>;
  pace_forecast?: Maybe<Scalars["String"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  realtimehorse_id?: Maybe<Scalars["String"]>;
  rest_reason_code?: Maybe<Scalars["String"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  run_type?: Maybe<Scalars["String"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  rushing_type?: Maybe<Scalars["String"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  transport_class?: Maybe<Scalars["String"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  weight_confirm_inc_dec?: Maybe<Scalars["String"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type RealtimehorsesStddevFields = {
  __typename?: "realtimehorses_stddev_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "realtimehorses" */
export type RealtimehorsesStddevOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RealtimehorsesStddevPopFields = {
  __typename?: "realtimehorses_stddev_pop_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "realtimehorses" */
export type RealtimehorsesStddevPopOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RealtimehorsesStddevSampFields = {
  __typename?: "realtimehorses_stddev_samp_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "realtimehorses" */
export type RealtimehorsesStddevSampOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RealtimehorsesSumFields = {
  __typename?: "realtimehorses_sum_fields";
  after_three_f_diff?: Maybe<Scalars["Int"]>;
  after_three_f_in_out?: Maybe<Scalars["Int"]>;
  after_three_f_rank?: Maybe<Scalars["Int"]>;
  apprentice_class?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  blinker?: Maybe<Scalars["Int"]>;
  border_num?: Maybe<Scalars["Int"]>;
  cancel_flag?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  condition_class?: Maybe<Scalars["Int"]>;
  dart_suitability_code?: Maybe<Scalars["Int"]>;
  day_num_from_entrance?: Maybe<Scalars["Int"]>;
  degree_flag?: Maybe<Scalars["Int"]>;
  distance_aptitude?: Maybe<Scalars["Int"]>;
  goal_diff?: Maybe<Scalars["Int"]>;
  goal_in_out?: Maybe<Scalars["Int"]>;
  goal_rank?: Maybe<Scalars["Int"]>;
  heavy_aptitude_code?: Maybe<Scalars["Int"]>;
  hoof_code?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Int"]>;
  in_out_way?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Int"]>;
  jockey_code?: Maybe<Scalars["Int"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Int"]>;
  leg_quality?: Maybe<Scalars["Int"]>;
  ls_index_rank?: Maybe<Scalars["Int"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Int"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  popularity_index?: Maybe<Scalars["Int"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Int"]>;
  rising_degree?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Int"]>;
  rotation?: Maybe<Scalars["Int"]>;
  run_num_from_entrance?: Maybe<Scalars["Int"]>;
  rushing_index?: Maybe<Scalars["Int"]>;
  rushing_rank?: Maybe<Scalars["Int"]>;
  rushing_sign?: Maybe<Scalars["Int"]>;
  sex_code?: Maybe<Scalars["Int"]>;
  specific_info_bt?: Maybe<Scalars["Int"]>;
  specific_info_bu?: Maybe<Scalars["Int"]>;
  specific_info_c?: Maybe<Scalars["Int"]>;
  specific_info_dc?: Maybe<Scalars["Int"]>;
  specific_info_t?: Maybe<Scalars["Int"]>;
  stable_eval_code?: Maybe<Scalars["Int"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Int"]>;
  stable_sign?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Int"]>;
  ticket_index?: Maybe<Scalars["Int"]>;
  ticket_sign?: Maybe<Scalars["Int"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Int"]>;
  total_info_bu?: Maybe<Scalars["Int"]>;
  total_info_c?: Maybe<Scalars["Int"]>;
  total_info_dc?: Maybe<Scalars["Int"]>;
  total_info_t?: Maybe<Scalars["Int"]>;
  total_sign?: Maybe<Scalars["Int"]>;
  train_allow_code?: Maybe<Scalars["Int"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Int"]>;
  trainer_code?: Maybe<Scalars["Int"]>;
  turf_suitability_code?: Maybe<Scalars["Int"]>;
  way_diff?: Maybe<Scalars["Int"]>;
  way_order?: Maybe<Scalars["Int"]>;
  weight_confirm?: Maybe<Scalars["Int"]>;
  winning_prize?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "realtimehorses" */
export type RealtimehorsesSumOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** update columns of table "realtimehorses" */
export enum RealtimehorsesUpdateColumn {
  /** column name */
  AFTER_THREE_F_DIFF = "after_three_f_diff",
  /** column name */
  AFTER_THREE_F_IN_OUT = "after_three_f_in_out",
  /** column name */
  AFTER_THREE_F_RANK = "after_three_f_rank",
  /** column name */
  APPRENTICE_CLASS = "apprentice_class",
  /** column name */
  BASIS_WEIGHT = "basis_weight",
  /** column name */
  BLINKER = "blinker",
  /** column name */
  BODY_TYPE = "body_type",
  /** column name */
  BODY_TYPE_TOTAL_ONE = "body_type_total_one",
  /** column name */
  BODY_TYPE_TOTAL_THREE = "body_type_total_three",
  /** column name */
  BODY_TYPE_TOTAL_TWO = "body_type_total_two",
  /** column name */
  BORDER_NUM = "border_num",
  /** column name */
  CANCEL_FLAG = "cancel_flag",
  /** column name */
  CLASS_CODE = "class_code",
  /** column name */
  CONDITION_CLASS = "condition_class",
  /** column name */
  DART_SUITABILITY_CODE = "dart_suitability_code",
  /** column name */
  DAY_ENTRANCE = "day_entrance",
  /** column name */
  DAY_NUM_FROM_ENTRANCE = "day_num_from_entrance",
  /** column name */
  DEGREE_FLAG = "degree_flag",
  /** column name */
  DISTANCE_APTITUDE = "distance_aptitude",
  /** column name */
  DISTANCE_APTITUDE_TWO = "distance_aptitude_two",
  /** column name */
  EXPANSION_SYMBOL = "expansion_symbol",
  /** column name */
  FLAG = "flag",
  /** column name */
  GOAL_DIFF = "goal_diff",
  /** column name */
  GOAL_IN_OUT = "goal_in_out",
  /** column name */
  GOAL_RANK = "goal_rank",
  /** column name */
  GRAZING_DESTINATION = "grazing_destination",
  /** column name */
  GRAZING_DESTINATION_RANK = "grazing_destination_rank",
  /** column name */
  HEAVY_APTITUDE_CODE = "heavy_aptitude_code",
  /** column name */
  HOOF_CODE = "hoof_code",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  HORSE_SIGN_CODE = "horse_sign_code",
  /** column name */
  HORSE_SLOW_START_RATE = "horse_slow_start_rate",
  /** column name */
  HORSE_SPECIAL_MENTION_ONE = "horse_special_mention_one",
  /** column name */
  HORSE_SPECIAL_MENTION_THREE = "horse_special_mention_three",
  /** column name */
  HORSE_SPECIAL_MENTION_TWO = "horse_special_mention_two",
  /** column name */
  HORSE_START_INDEX = "horse_start_index",
  /** column name */
  IDM = "idm",
  /** column name */
  IDM_SIGN = "idm_sign",
  /** column name */
  IN_OUT_WAY = "in_out_way",
  /** column name */
  INCOME_PRIZE = "income_prize",
  /** column name */
  INFO_INDEX = "info_index",
  /** column name */
  INFO_SIGN = "info_sign",
  /** column name */
  JOCKEY_CODE = "jockey_code",
  /** column name */
  JOCKEY_EX_CO_RATE = "jockey_ex_co_rate",
  /** column name */
  JOCKEY_EXPEC_THREE_RID_RATE = "jockey_expec_three_rid_rate",
  /** column name */
  JOCKEY_EXPEC_V_RATE = "jockey_expec_v_rate",
  /** column name */
  JOCKEY_INDEX = "jockey_index",
  /** column name */
  JOCKEY_SIGN = "jockey_sign",
  /** column name */
  LEG_QUALITY = "leg_quality",
  /** column name */
  LS_INDEX_RANK = "ls_index_rank",
  /** column name */
  MULTI_WIN_ODDS = "multi_win_odds",
  /** column name */
  MULTI_WIN_POPULARITY = "multi_win_popularity",
  /** column name */
  ODDS = "odds",
  /** column name */
  OWNER_GROUP_CODE = "owner_group_code",
  /** column name */
  OWNER_NAME = "owner_name",
  /** column name */
  PACE_FORECAST = "pace_forecast",
  /** column name */
  PACE_INDEX = "pace_index",
  /** column name */
  PACE_INDEX_RANK = "pace_index_rank",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  POPULARITY = "popularity",
  /** column name */
  POPULARITY_INDEX = "popularity_index",
  /** column name */
  POSITION_INDEX = "position_index",
  /** column name */
  POSITION_INDEX_RANK = "position_index_rank",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  REALTIMEHORSE_ID = "realtimehorse_id",
  /** column name */
  REST_REASON_CODE = "rest_reason_code",
  /** column name */
  RISING_DEGREE = "rising_degree",
  /** column name */
  RISING_INDEX = "rising_index",
  /** column name */
  RISING_INDEX_RANK = "rising_index_rank",
  /** column name */
  ROTATION = "rotation",
  /** column name */
  RUN_NUM_FROM_ENTRANCE = "run_num_from_entrance",
  /** column name */
  RUN_TYPE = "run_type",
  /** column name */
  RUSHING_INDEX = "rushing_index",
  /** column name */
  RUSHING_RANK = "rushing_rank",
  /** column name */
  RUSHING_SIGN = "rushing_sign",
  /** column name */
  RUSHING_TYPE = "rushing_type",
  /** column name */
  SEX_CODE = "sex_code",
  /** column name */
  SPECIFIC_INFO_BT = "specific_info_bt",
  /** column name */
  SPECIFIC_INFO_BU = "specific_info_bu",
  /** column name */
  SPECIFIC_INFO_C = "specific_info_c",
  /** column name */
  SPECIFIC_INFO_DC = "specific_info_dc",
  /** column name */
  SPECIFIC_INFO_T = "specific_info_t",
  /** column name */
  STABLE_EVAL_CODE = "stable_eval_code",
  /** column name */
  STABLE_INDEX = "stable_index",
  /** column name */
  STABLE_RANK = "stable_rank",
  /** column name */
  STABLE_SIGN = "stable_sign",
  /** column name */
  TEN_INDEX = "ten_index",
  /** column name */
  TEN_INDEX_RANK = "ten_index_rank",
  /** column name */
  TICKET_INDEX = "ticket_index",
  /** column name */
  TICKET_SIGN = "ticket_sign",
  /** column name */
  TOTAL_INDEX = "total_index",
  /** column name */
  TOTAL_INFO_BT = "total_info_bt",
  /** column name */
  TOTAL_INFO_BU = "total_info_bu",
  /** column name */
  TOTAL_INFO_C = "total_info_c",
  /** column name */
  TOTAL_INFO_DC = "total_info_dc",
  /** column name */
  TOTAL_INFO_T = "total_info_t",
  /** column name */
  TOTAL_SIGN = "total_sign",
  /** column name */
  TRAIN_ALLOW_CODE = "train_allow_code",
  /** column name */
  TRAIN_INDEX = "train_index",
  /** column name */
  TRAIN_SIGN = "train_sign",
  /** column name */
  TRAINER_CODE = "trainer_code",
  /** column name */
  TRANSPORT_CLASS = "transport_class",
  /** column name */
  TURF_SUITABILITY_CODE = "turf_suitability_code",
  /** column name */
  WAY_DIFF = "way_diff",
  /** column name */
  WAY_ORDER = "way_order",
  /** column name */
  WEIGHT_CONFIRM = "weight_confirm",
  /** column name */
  WEIGHT_CONFIRM_INC_DEC = "weight_confirm_inc_dec",
  /** column name */
  WINNING_PRIZE = "winning_prize",
}

/** aggregate var_pop on columns */
export type RealtimehorsesVarPopFields = {
  __typename?: "realtimehorses_var_pop_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "realtimehorses" */
export type RealtimehorsesVarPopOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RealtimehorsesVarSampFields = {
  __typename?: "realtimehorses_var_samp_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "realtimehorses" */
export type RealtimehorsesVarSampOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RealtimehorsesVarianceFields = {
  __typename?: "realtimehorses_variance_fields";
  after_three_f_diff?: Maybe<Scalars["Float"]>;
  after_three_f_in_out?: Maybe<Scalars["Float"]>;
  after_three_f_rank?: Maybe<Scalars["Float"]>;
  apprentice_class?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  blinker?: Maybe<Scalars["Float"]>;
  border_num?: Maybe<Scalars["Float"]>;
  cancel_flag?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  condition_class?: Maybe<Scalars["Float"]>;
  dart_suitability_code?: Maybe<Scalars["Float"]>;
  day_num_from_entrance?: Maybe<Scalars["Float"]>;
  degree_flag?: Maybe<Scalars["Float"]>;
  distance_aptitude?: Maybe<Scalars["Float"]>;
  goal_diff?: Maybe<Scalars["Float"]>;
  goal_in_out?: Maybe<Scalars["Float"]>;
  goal_rank?: Maybe<Scalars["Float"]>;
  heavy_aptitude_code?: Maybe<Scalars["Float"]>;
  hoof_code?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_slow_start_rate?: Maybe<Scalars["Float"]>;
  horse_start_index?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  idm_sign?: Maybe<Scalars["Float"]>;
  in_out_way?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  info_index?: Maybe<Scalars["Float"]>;
  info_sign?: Maybe<Scalars["Float"]>;
  jockey_code?: Maybe<Scalars["Float"]>;
  jockey_ex_co_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_three_rid_rate?: Maybe<Scalars["Float"]>;
  jockey_expec_v_rate?: Maybe<Scalars["Float"]>;
  jockey_index?: Maybe<Scalars["Float"]>;
  jockey_sign?: Maybe<Scalars["Float"]>;
  leg_quality?: Maybe<Scalars["Float"]>;
  ls_index_rank?: Maybe<Scalars["Float"]>;
  multi_win_odds?: Maybe<Scalars["Float"]>;
  multi_win_popularity?: Maybe<Scalars["Float"]>;
  odds?: Maybe<Scalars["Float"]>;
  owner_group_code?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pace_index_rank?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
  popularity_index?: Maybe<Scalars["Float"]>;
  position_index?: Maybe<Scalars["Float"]>;
  position_index_rank?: Maybe<Scalars["Float"]>;
  rising_degree?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  rising_index_rank?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  run_num_from_entrance?: Maybe<Scalars["Float"]>;
  rushing_index?: Maybe<Scalars["Float"]>;
  rushing_rank?: Maybe<Scalars["Float"]>;
  rushing_sign?: Maybe<Scalars["Float"]>;
  sex_code?: Maybe<Scalars["Float"]>;
  specific_info_bt?: Maybe<Scalars["Float"]>;
  specific_info_bu?: Maybe<Scalars["Float"]>;
  specific_info_c?: Maybe<Scalars["Float"]>;
  specific_info_dc?: Maybe<Scalars["Float"]>;
  specific_info_t?: Maybe<Scalars["Float"]>;
  stable_eval_code?: Maybe<Scalars["Float"]>;
  stable_index?: Maybe<Scalars["Float"]>;
  stable_rank?: Maybe<Scalars["Float"]>;
  stable_sign?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  ten_index_rank?: Maybe<Scalars["Float"]>;
  ticket_index?: Maybe<Scalars["Float"]>;
  ticket_sign?: Maybe<Scalars["Float"]>;
  total_index?: Maybe<Scalars["Float"]>;
  total_info_bt?: Maybe<Scalars["Float"]>;
  total_info_bu?: Maybe<Scalars["Float"]>;
  total_info_c?: Maybe<Scalars["Float"]>;
  total_info_dc?: Maybe<Scalars["Float"]>;
  total_info_t?: Maybe<Scalars["Float"]>;
  total_sign?: Maybe<Scalars["Float"]>;
  train_allow_code?: Maybe<Scalars["Float"]>;
  train_index?: Maybe<Scalars["Float"]>;
  train_sign?: Maybe<Scalars["Float"]>;
  trainer_code?: Maybe<Scalars["Float"]>;
  turf_suitability_code?: Maybe<Scalars["Float"]>;
  way_diff?: Maybe<Scalars["Float"]>;
  way_order?: Maybe<Scalars["Float"]>;
  weight_confirm?: Maybe<Scalars["Float"]>;
  winning_prize?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "realtimehorses" */
export type RealtimehorsesVarianceOrderBy = {
  after_three_f_diff?: Maybe<OrderBy>;
  after_three_f_in_out?: Maybe<OrderBy>;
  after_three_f_rank?: Maybe<OrderBy>;
  apprentice_class?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  blinker?: Maybe<OrderBy>;
  border_num?: Maybe<OrderBy>;
  cancel_flag?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  condition_class?: Maybe<OrderBy>;
  dart_suitability_code?: Maybe<OrderBy>;
  day_num_from_entrance?: Maybe<OrderBy>;
  degree_flag?: Maybe<OrderBy>;
  distance_aptitude?: Maybe<OrderBy>;
  goal_diff?: Maybe<OrderBy>;
  goal_in_out?: Maybe<OrderBy>;
  goal_rank?: Maybe<OrderBy>;
  heavy_aptitude_code?: Maybe<OrderBy>;
  hoof_code?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_slow_start_rate?: Maybe<OrderBy>;
  horse_start_index?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  idm_sign?: Maybe<OrderBy>;
  in_out_way?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  info_index?: Maybe<OrderBy>;
  info_sign?: Maybe<OrderBy>;
  jockey_code?: Maybe<OrderBy>;
  jockey_ex_co_rate?: Maybe<OrderBy>;
  jockey_expec_three_rid_rate?: Maybe<OrderBy>;
  jockey_expec_v_rate?: Maybe<OrderBy>;
  jockey_index?: Maybe<OrderBy>;
  jockey_sign?: Maybe<OrderBy>;
  leg_quality?: Maybe<OrderBy>;
  ls_index_rank?: Maybe<OrderBy>;
  multi_win_odds?: Maybe<OrderBy>;
  multi_win_popularity?: Maybe<OrderBy>;
  odds?: Maybe<OrderBy>;
  owner_group_code?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pace_index_rank?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  popularity_index?: Maybe<OrderBy>;
  position_index?: Maybe<OrderBy>;
  position_index_rank?: Maybe<OrderBy>;
  rising_degree?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  rising_index_rank?: Maybe<OrderBy>;
  rotation?: Maybe<OrderBy>;
  run_num_from_entrance?: Maybe<OrderBy>;
  rushing_index?: Maybe<OrderBy>;
  rushing_rank?: Maybe<OrderBy>;
  rushing_sign?: Maybe<OrderBy>;
  sex_code?: Maybe<OrderBy>;
  specific_info_bt?: Maybe<OrderBy>;
  specific_info_bu?: Maybe<OrderBy>;
  specific_info_c?: Maybe<OrderBy>;
  specific_info_dc?: Maybe<OrderBy>;
  specific_info_t?: Maybe<OrderBy>;
  stable_eval_code?: Maybe<OrderBy>;
  stable_index?: Maybe<OrderBy>;
  stable_rank?: Maybe<OrderBy>;
  stable_sign?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  ten_index_rank?: Maybe<OrderBy>;
  ticket_index?: Maybe<OrderBy>;
  ticket_sign?: Maybe<OrderBy>;
  total_index?: Maybe<OrderBy>;
  total_info_bt?: Maybe<OrderBy>;
  total_info_bu?: Maybe<OrderBy>;
  total_info_c?: Maybe<OrderBy>;
  total_info_dc?: Maybe<OrderBy>;
  total_info_t?: Maybe<OrderBy>;
  total_sign?: Maybe<OrderBy>;
  train_allow_code?: Maybe<OrderBy>;
  train_index?: Maybe<OrderBy>;
  train_sign?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  turf_suitability_code?: Maybe<OrderBy>;
  way_diff?: Maybe<OrderBy>;
  way_order?: Maybe<OrderBy>;
  weight_confirm?: Maybe<OrderBy>;
  winning_prize?: Maybe<OrderBy>;
};

/** columns and relationships of "refunds" */
export type Refunds = {
  __typename?: "refunds";
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  race_key: Scalars["String"];
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "refunds" */
export type RefundsAggregate = {
  __typename?: "refunds_aggregate";
  aggregate?: Maybe<RefundsAggregateFields>;
  nodes: Array<Refunds>;
};

/** aggregate fields of "refunds" */
export type RefundsAggregateFields = {
  __typename?: "refunds_aggregate_fields";
  avg?: Maybe<RefundsAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RefundsMaxFields>;
  min?: Maybe<RefundsMinFields>;
  stddev?: Maybe<RefundsStddevFields>;
  stddev_pop?: Maybe<RefundsStddevPopFields>;
  stddev_samp?: Maybe<RefundsStddevSampFields>;
  sum?: Maybe<RefundsSumFields>;
  var_pop?: Maybe<RefundsVarPopFields>;
  var_samp?: Maybe<RefundsVarSampFields>;
  variance?: Maybe<RefundsVarianceFields>;
};

/** aggregate fields of "refunds" */
export type RefundsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RefundsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "refunds" */
export type RefundsAggregateOrderBy = {
  avg?: Maybe<RefundsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RefundsMaxOrderBy>;
  min?: Maybe<RefundsMinOrderBy>;
  stddev?: Maybe<RefundsStddevOrderBy>;
  stddev_pop?: Maybe<RefundsStddevPopOrderBy>;
  stddev_samp?: Maybe<RefundsStddevSampOrderBy>;
  sum?: Maybe<RefundsSumOrderBy>;
  var_pop?: Maybe<RefundsVarPopOrderBy>;
  var_samp?: Maybe<RefundsVarSampOrderBy>;
  variance?: Maybe<RefundsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "refunds" */
export type RefundsArrRelInsertInput = {
  data: Array<RefundsInsertInput>;
  on_conflict?: Maybe<RefundsOnConflict>;
};

/** aggregate avg on columns */
export type RefundsAvgFields = {
  __typename?: "refunds_avg_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "refunds" */
export type RefundsAvgOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "refunds". All fields are combined with a logical 'AND'. */
export type RefundsBoolExp = {
  _and?: Maybe<Array<Maybe<RefundsBoolExp>>>;
  _not?: Maybe<RefundsBoolExp>;
  _or?: Maybe<Array<Maybe<RefundsBoolExp>>>;
  horse_num_multi_fifth?: Maybe<IntComparisonExp>;
  horse_num_multi_first?: Maybe<IntComparisonExp>;
  horse_num_multi_fourth?: Maybe<IntComparisonExp>;
  horse_num_multi_second?: Maybe<IntComparisonExp>;
  horse_num_multi_third?: Maybe<IntComparisonExp>;
  horse_num_sanrenpuku_first?: Maybe<IntComparisonExp>;
  horse_num_sanrenpuku_second?: Maybe<IntComparisonExp>;
  horse_num_sanrenpuku_third?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_fifth?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_first?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_fourth?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_second?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_sixth?: Maybe<IntComparisonExp>;
  horse_num_sanrentan_third?: Maybe<IntComparisonExp>;
  horse_num_umaren_first?: Maybe<IntComparisonExp>;
  horse_num_umaren_second?: Maybe<IntComparisonExp>;
  horse_num_umaren_third?: Maybe<IntComparisonExp>;
  horse_num_umatan_fifth?: Maybe<IntComparisonExp>;
  horse_num_umatan_first?: Maybe<IntComparisonExp>;
  horse_num_umatan_fourth?: Maybe<IntComparisonExp>;
  horse_num_umatan_second?: Maybe<IntComparisonExp>;
  horse_num_umatan_sixth?: Maybe<IntComparisonExp>;
  horse_num_umatan_third?: Maybe<IntComparisonExp>;
  horse_num_wide_fifth?: Maybe<IntComparisonExp>;
  horse_num_wide_first?: Maybe<IntComparisonExp>;
  horse_num_wide_fourth?: Maybe<IntComparisonExp>;
  horse_num_wide_second?: Maybe<IntComparisonExp>;
  horse_num_wide_seventh?: Maybe<IntComparisonExp>;
  horse_num_wide_sixth?: Maybe<IntComparisonExp>;
  horse_num_wide_third?: Maybe<IntComparisonExp>;
  horse_num_win_first?: Maybe<IntComparisonExp>;
  horse_num_win_second?: Maybe<IntComparisonExp>;
  horse_num_win_third?: Maybe<IntComparisonExp>;
  multi_refunds_fifth?: Maybe<IntComparisonExp>;
  multi_refunds_first?: Maybe<IntComparisonExp>;
  multi_refunds_fourth?: Maybe<IntComparisonExp>;
  multi_refunds_second?: Maybe<IntComparisonExp>;
  multi_refunds_third?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
  sanrenpuku_refunds_first?: Maybe<IntComparisonExp>;
  sanrenpuku_refunds_second?: Maybe<IntComparisonExp>;
  sanrenpuku_refunds_third?: Maybe<IntComparisonExp>;
  sanrentan_refunds_fifth?: Maybe<IntComparisonExp>;
  sanrentan_refunds_first?: Maybe<IntComparisonExp>;
  sanrentan_refunds_fourth?: Maybe<IntComparisonExp>;
  sanrentan_refunds_second?: Maybe<IntComparisonExp>;
  sanrentan_refunds_sixth?: Maybe<IntComparisonExp>;
  sanrentan_refunds_third?: Maybe<IntComparisonExp>;
  umaren_refunds_first?: Maybe<IntComparisonExp>;
  umaren_refunds_second?: Maybe<IntComparisonExp>;
  umaren_refunds_third?: Maybe<IntComparisonExp>;
  umatan_refunds_fifth?: Maybe<IntComparisonExp>;
  umatan_refunds_first?: Maybe<IntComparisonExp>;
  umatan_refunds_fourth?: Maybe<IntComparisonExp>;
  umatan_refunds_second?: Maybe<IntComparisonExp>;
  umatan_refunds_sixth?: Maybe<IntComparisonExp>;
  umatan_refunds_third?: Maybe<IntComparisonExp>;
  wakuban_first?: Maybe<IntComparisonExp>;
  wakuban_second?: Maybe<IntComparisonExp>;
  wakuban_third?: Maybe<IntComparisonExp>;
  wakuren_refunds_first?: Maybe<IntComparisonExp>;
  wakuren_refunds_second?: Maybe<IntComparisonExp>;
  wakuren_refunds_third?: Maybe<IntComparisonExp>;
  wide_refunds_fifth?: Maybe<IntComparisonExp>;
  wide_refunds_first?: Maybe<IntComparisonExp>;
  wide_refunds_fourth?: Maybe<IntComparisonExp>;
  wide_refunds_second?: Maybe<IntComparisonExp>;
  wide_refunds_seventh?: Maybe<IntComparisonExp>;
  wide_refunds_sixth?: Maybe<IntComparisonExp>;
  wide_refunds_third?: Maybe<IntComparisonExp>;
  win_refunds_first?: Maybe<IntComparisonExp>;
  win_refunds_second?: Maybe<IntComparisonExp>;
  win_refunds_third?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "refunds" */
export enum RefundsConstraint {
  /** unique or primary key constraint */
  REFUNDS_PKEY = "refunds_pkey",
}

/** input type for incrementing integer column in table "refunds" */
export type RefundsIncInput = {
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "refunds" */
export type RefundsInsertInput = {
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type RefundsMaxFields = {
  __typename?: "refunds_max_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "refunds" */
export type RefundsMaxOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RefundsMinFields = {
  __typename?: "refunds_min_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "refunds" */
export type RefundsMinOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** response of any mutation on the table "refunds" */
export type RefundsMutationResponse = {
  __typename?: "refunds_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Refunds>;
};

/** input type for inserting object relation for remote table "refunds" */
export type RefundsObjRelInsertInput = {
  data: RefundsInsertInput;
  on_conflict?: Maybe<RefundsOnConflict>;
};

/** on conflict condition type for table "refunds" */
export type RefundsOnConflict = {
  constraint: RefundsConstraint;
  update_columns: Array<RefundsUpdateColumn>;
  where?: Maybe<RefundsBoolExp>;
};

/** ordering options when selecting data from "refunds" */
export type RefundsOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** primary key columns input for table: "refunds" */
export type RefundsPkColumnsInput = {
  race_key: Scalars["String"];
};

/** select columns of table "refunds" */
export enum RefundsSelectColumn {
  /** column name */
  HORSE_NUM_MULTI_FIFTH = "horse_num_multi_fifth",
  /** column name */
  HORSE_NUM_MULTI_FIRST = "horse_num_multi_first",
  /** column name */
  HORSE_NUM_MULTI_FOURTH = "horse_num_multi_fourth",
  /** column name */
  HORSE_NUM_MULTI_SECOND = "horse_num_multi_second",
  /** column name */
  HORSE_NUM_MULTI_THIRD = "horse_num_multi_third",
  /** column name */
  HORSE_NUM_SANRENPUKU_FIRST = "horse_num_sanrenpuku_first",
  /** column name */
  HORSE_NUM_SANRENPUKU_SECOND = "horse_num_sanrenpuku_second",
  /** column name */
  HORSE_NUM_SANRENPUKU_THIRD = "horse_num_sanrenpuku_third",
  /** column name */
  HORSE_NUM_SANRENTAN_FIFTH = "horse_num_sanrentan_fifth",
  /** column name */
  HORSE_NUM_SANRENTAN_FIRST = "horse_num_sanrentan_first",
  /** column name */
  HORSE_NUM_SANRENTAN_FOURTH = "horse_num_sanrentan_fourth",
  /** column name */
  HORSE_NUM_SANRENTAN_SECOND = "horse_num_sanrentan_second",
  /** column name */
  HORSE_NUM_SANRENTAN_SIXTH = "horse_num_sanrentan_sixth",
  /** column name */
  HORSE_NUM_SANRENTAN_THIRD = "horse_num_sanrentan_third",
  /** column name */
  HORSE_NUM_UMAREN_FIRST = "horse_num_umaren_first",
  /** column name */
  HORSE_NUM_UMAREN_SECOND = "horse_num_umaren_second",
  /** column name */
  HORSE_NUM_UMAREN_THIRD = "horse_num_umaren_third",
  /** column name */
  HORSE_NUM_UMATAN_FIFTH = "horse_num_umatan_fifth",
  /** column name */
  HORSE_NUM_UMATAN_FIRST = "horse_num_umatan_first",
  /** column name */
  HORSE_NUM_UMATAN_FOURTH = "horse_num_umatan_fourth",
  /** column name */
  HORSE_NUM_UMATAN_SECOND = "horse_num_umatan_second",
  /** column name */
  HORSE_NUM_UMATAN_SIXTH = "horse_num_umatan_sixth",
  /** column name */
  HORSE_NUM_UMATAN_THIRD = "horse_num_umatan_third",
  /** column name */
  HORSE_NUM_WIDE_FIFTH = "horse_num_wide_fifth",
  /** column name */
  HORSE_NUM_WIDE_FIRST = "horse_num_wide_first",
  /** column name */
  HORSE_NUM_WIDE_FOURTH = "horse_num_wide_fourth",
  /** column name */
  HORSE_NUM_WIDE_SECOND = "horse_num_wide_second",
  /** column name */
  HORSE_NUM_WIDE_SEVENTH = "horse_num_wide_seventh",
  /** column name */
  HORSE_NUM_WIDE_SIXTH = "horse_num_wide_sixth",
  /** column name */
  HORSE_NUM_WIDE_THIRD = "horse_num_wide_third",
  /** column name */
  HORSE_NUM_WIN_FIRST = "horse_num_win_first",
  /** column name */
  HORSE_NUM_WIN_SECOND = "horse_num_win_second",
  /** column name */
  HORSE_NUM_WIN_THIRD = "horse_num_win_third",
  /** column name */
  MULTI_REFUNDS_FIFTH = "multi_refunds_fifth",
  /** column name */
  MULTI_REFUNDS_FIRST = "multi_refunds_first",
  /** column name */
  MULTI_REFUNDS_FOURTH = "multi_refunds_fourth",
  /** column name */
  MULTI_REFUNDS_SECOND = "multi_refunds_second",
  /** column name */
  MULTI_REFUNDS_THIRD = "multi_refunds_third",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  SANRENPUKU_REFUNDS_FIRST = "sanrenpuku_refunds_first",
  /** column name */
  SANRENPUKU_REFUNDS_SECOND = "sanrenpuku_refunds_second",
  /** column name */
  SANRENPUKU_REFUNDS_THIRD = "sanrenpuku_refunds_third",
  /** column name */
  SANRENTAN_REFUNDS_FIFTH = "sanrentan_refunds_fifth",
  /** column name */
  SANRENTAN_REFUNDS_FIRST = "sanrentan_refunds_first",
  /** column name */
  SANRENTAN_REFUNDS_FOURTH = "sanrentan_refunds_fourth",
  /** column name */
  SANRENTAN_REFUNDS_SECOND = "sanrentan_refunds_second",
  /** column name */
  SANRENTAN_REFUNDS_SIXTH = "sanrentan_refunds_sixth",
  /** column name */
  SANRENTAN_REFUNDS_THIRD = "sanrentan_refunds_third",
  /** column name */
  UMAREN_REFUNDS_FIRST = "umaren_refunds_first",
  /** column name */
  UMAREN_REFUNDS_SECOND = "umaren_refunds_second",
  /** column name */
  UMAREN_REFUNDS_THIRD = "umaren_refunds_third",
  /** column name */
  UMATAN_REFUNDS_FIFTH = "umatan_refunds_fifth",
  /** column name */
  UMATAN_REFUNDS_FIRST = "umatan_refunds_first",
  /** column name */
  UMATAN_REFUNDS_FOURTH = "umatan_refunds_fourth",
  /** column name */
  UMATAN_REFUNDS_SECOND = "umatan_refunds_second",
  /** column name */
  UMATAN_REFUNDS_SIXTH = "umatan_refunds_sixth",
  /** column name */
  UMATAN_REFUNDS_THIRD = "umatan_refunds_third",
  /** column name */
  WAKUBAN_FIRST = "wakuban_first",
  /** column name */
  WAKUBAN_SECOND = "wakuban_second",
  /** column name */
  WAKUBAN_THIRD = "wakuban_third",
  /** column name */
  WAKUREN_REFUNDS_FIRST = "wakuren_refunds_first",
  /** column name */
  WAKUREN_REFUNDS_SECOND = "wakuren_refunds_second",
  /** column name */
  WAKUREN_REFUNDS_THIRD = "wakuren_refunds_third",
  /** column name */
  WIDE_REFUNDS_FIFTH = "wide_refunds_fifth",
  /** column name */
  WIDE_REFUNDS_FIRST = "wide_refunds_first",
  /** column name */
  WIDE_REFUNDS_FOURTH = "wide_refunds_fourth",
  /** column name */
  WIDE_REFUNDS_SECOND = "wide_refunds_second",
  /** column name */
  WIDE_REFUNDS_SEVENTH = "wide_refunds_seventh",
  /** column name */
  WIDE_REFUNDS_SIXTH = "wide_refunds_sixth",
  /** column name */
  WIDE_REFUNDS_THIRD = "wide_refunds_third",
  /** column name */
  WIN_REFUNDS_FIRST = "win_refunds_first",
  /** column name */
  WIN_REFUNDS_SECOND = "win_refunds_second",
  /** column name */
  WIN_REFUNDS_THIRD = "win_refunds_third",
}

/** input type for updating data in table "refunds" */
export type RefundsSetInput = {
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type RefundsStddevFields = {
  __typename?: "refunds_stddev_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "refunds" */
export type RefundsStddevOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RefundsStddevPopFields = {
  __typename?: "refunds_stddev_pop_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "refunds" */
export type RefundsStddevPopOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RefundsStddevSampFields = {
  __typename?: "refunds_stddev_samp_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "refunds" */
export type RefundsStddevSampOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RefundsSumFields = {
  __typename?: "refunds_sum_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Int"]>;
  horse_num_multi_first?: Maybe<Scalars["Int"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Int"]>;
  horse_num_multi_second?: Maybe<Scalars["Int"]>;
  horse_num_multi_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Int"]>;
  horse_num_umaren_first?: Maybe<Scalars["Int"]>;
  horse_num_umaren_second?: Maybe<Scalars["Int"]>;
  horse_num_umaren_third?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_first?: Maybe<Scalars["Int"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_second?: Maybe<Scalars["Int"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Int"]>;
  horse_num_umatan_third?: Maybe<Scalars["Int"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Int"]>;
  horse_num_wide_first?: Maybe<Scalars["Int"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Int"]>;
  horse_num_wide_second?: Maybe<Scalars["Int"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Int"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Int"]>;
  horse_num_wide_third?: Maybe<Scalars["Int"]>;
  horse_num_win_first?: Maybe<Scalars["Int"]>;
  horse_num_win_second?: Maybe<Scalars["Int"]>;
  horse_num_win_third?: Maybe<Scalars["Int"]>;
  multi_refunds_fifth?: Maybe<Scalars["Int"]>;
  multi_refunds_first?: Maybe<Scalars["Int"]>;
  multi_refunds_fourth?: Maybe<Scalars["Int"]>;
  multi_refunds_second?: Maybe<Scalars["Int"]>;
  multi_refunds_third?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Int"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Int"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Int"]>;
  umaren_refunds_first?: Maybe<Scalars["Int"]>;
  umaren_refunds_second?: Maybe<Scalars["Int"]>;
  umaren_refunds_third?: Maybe<Scalars["Int"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Int"]>;
  umatan_refunds_first?: Maybe<Scalars["Int"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Int"]>;
  umatan_refunds_second?: Maybe<Scalars["Int"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Int"]>;
  umatan_refunds_third?: Maybe<Scalars["Int"]>;
  wakuban_first?: Maybe<Scalars["Int"]>;
  wakuban_second?: Maybe<Scalars["Int"]>;
  wakuban_third?: Maybe<Scalars["Int"]>;
  wakuren_refunds_first?: Maybe<Scalars["Int"]>;
  wakuren_refunds_second?: Maybe<Scalars["Int"]>;
  wakuren_refunds_third?: Maybe<Scalars["Int"]>;
  wide_refunds_fifth?: Maybe<Scalars["Int"]>;
  wide_refunds_first?: Maybe<Scalars["Int"]>;
  wide_refunds_fourth?: Maybe<Scalars["Int"]>;
  wide_refunds_second?: Maybe<Scalars["Int"]>;
  wide_refunds_seventh?: Maybe<Scalars["Int"]>;
  wide_refunds_sixth?: Maybe<Scalars["Int"]>;
  wide_refunds_third?: Maybe<Scalars["Int"]>;
  win_refunds_first?: Maybe<Scalars["Int"]>;
  win_refunds_second?: Maybe<Scalars["Int"]>;
  win_refunds_third?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "refunds" */
export type RefundsSumOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** update columns of table "refunds" */
export enum RefundsUpdateColumn {
  /** column name */
  HORSE_NUM_MULTI_FIFTH = "horse_num_multi_fifth",
  /** column name */
  HORSE_NUM_MULTI_FIRST = "horse_num_multi_first",
  /** column name */
  HORSE_NUM_MULTI_FOURTH = "horse_num_multi_fourth",
  /** column name */
  HORSE_NUM_MULTI_SECOND = "horse_num_multi_second",
  /** column name */
  HORSE_NUM_MULTI_THIRD = "horse_num_multi_third",
  /** column name */
  HORSE_NUM_SANRENPUKU_FIRST = "horse_num_sanrenpuku_first",
  /** column name */
  HORSE_NUM_SANRENPUKU_SECOND = "horse_num_sanrenpuku_second",
  /** column name */
  HORSE_NUM_SANRENPUKU_THIRD = "horse_num_sanrenpuku_third",
  /** column name */
  HORSE_NUM_SANRENTAN_FIFTH = "horse_num_sanrentan_fifth",
  /** column name */
  HORSE_NUM_SANRENTAN_FIRST = "horse_num_sanrentan_first",
  /** column name */
  HORSE_NUM_SANRENTAN_FOURTH = "horse_num_sanrentan_fourth",
  /** column name */
  HORSE_NUM_SANRENTAN_SECOND = "horse_num_sanrentan_second",
  /** column name */
  HORSE_NUM_SANRENTAN_SIXTH = "horse_num_sanrentan_sixth",
  /** column name */
  HORSE_NUM_SANRENTAN_THIRD = "horse_num_sanrentan_third",
  /** column name */
  HORSE_NUM_UMAREN_FIRST = "horse_num_umaren_first",
  /** column name */
  HORSE_NUM_UMAREN_SECOND = "horse_num_umaren_second",
  /** column name */
  HORSE_NUM_UMAREN_THIRD = "horse_num_umaren_third",
  /** column name */
  HORSE_NUM_UMATAN_FIFTH = "horse_num_umatan_fifth",
  /** column name */
  HORSE_NUM_UMATAN_FIRST = "horse_num_umatan_first",
  /** column name */
  HORSE_NUM_UMATAN_FOURTH = "horse_num_umatan_fourth",
  /** column name */
  HORSE_NUM_UMATAN_SECOND = "horse_num_umatan_second",
  /** column name */
  HORSE_NUM_UMATAN_SIXTH = "horse_num_umatan_sixth",
  /** column name */
  HORSE_NUM_UMATAN_THIRD = "horse_num_umatan_third",
  /** column name */
  HORSE_NUM_WIDE_FIFTH = "horse_num_wide_fifth",
  /** column name */
  HORSE_NUM_WIDE_FIRST = "horse_num_wide_first",
  /** column name */
  HORSE_NUM_WIDE_FOURTH = "horse_num_wide_fourth",
  /** column name */
  HORSE_NUM_WIDE_SECOND = "horse_num_wide_second",
  /** column name */
  HORSE_NUM_WIDE_SEVENTH = "horse_num_wide_seventh",
  /** column name */
  HORSE_NUM_WIDE_SIXTH = "horse_num_wide_sixth",
  /** column name */
  HORSE_NUM_WIDE_THIRD = "horse_num_wide_third",
  /** column name */
  HORSE_NUM_WIN_FIRST = "horse_num_win_first",
  /** column name */
  HORSE_NUM_WIN_SECOND = "horse_num_win_second",
  /** column name */
  HORSE_NUM_WIN_THIRD = "horse_num_win_third",
  /** column name */
  MULTI_REFUNDS_FIFTH = "multi_refunds_fifth",
  /** column name */
  MULTI_REFUNDS_FIRST = "multi_refunds_first",
  /** column name */
  MULTI_REFUNDS_FOURTH = "multi_refunds_fourth",
  /** column name */
  MULTI_REFUNDS_SECOND = "multi_refunds_second",
  /** column name */
  MULTI_REFUNDS_THIRD = "multi_refunds_third",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  SANRENPUKU_REFUNDS_FIRST = "sanrenpuku_refunds_first",
  /** column name */
  SANRENPUKU_REFUNDS_SECOND = "sanrenpuku_refunds_second",
  /** column name */
  SANRENPUKU_REFUNDS_THIRD = "sanrenpuku_refunds_third",
  /** column name */
  SANRENTAN_REFUNDS_FIFTH = "sanrentan_refunds_fifth",
  /** column name */
  SANRENTAN_REFUNDS_FIRST = "sanrentan_refunds_first",
  /** column name */
  SANRENTAN_REFUNDS_FOURTH = "sanrentan_refunds_fourth",
  /** column name */
  SANRENTAN_REFUNDS_SECOND = "sanrentan_refunds_second",
  /** column name */
  SANRENTAN_REFUNDS_SIXTH = "sanrentan_refunds_sixth",
  /** column name */
  SANRENTAN_REFUNDS_THIRD = "sanrentan_refunds_third",
  /** column name */
  UMAREN_REFUNDS_FIRST = "umaren_refunds_first",
  /** column name */
  UMAREN_REFUNDS_SECOND = "umaren_refunds_second",
  /** column name */
  UMAREN_REFUNDS_THIRD = "umaren_refunds_third",
  /** column name */
  UMATAN_REFUNDS_FIFTH = "umatan_refunds_fifth",
  /** column name */
  UMATAN_REFUNDS_FIRST = "umatan_refunds_first",
  /** column name */
  UMATAN_REFUNDS_FOURTH = "umatan_refunds_fourth",
  /** column name */
  UMATAN_REFUNDS_SECOND = "umatan_refunds_second",
  /** column name */
  UMATAN_REFUNDS_SIXTH = "umatan_refunds_sixth",
  /** column name */
  UMATAN_REFUNDS_THIRD = "umatan_refunds_third",
  /** column name */
  WAKUBAN_FIRST = "wakuban_first",
  /** column name */
  WAKUBAN_SECOND = "wakuban_second",
  /** column name */
  WAKUBAN_THIRD = "wakuban_third",
  /** column name */
  WAKUREN_REFUNDS_FIRST = "wakuren_refunds_first",
  /** column name */
  WAKUREN_REFUNDS_SECOND = "wakuren_refunds_second",
  /** column name */
  WAKUREN_REFUNDS_THIRD = "wakuren_refunds_third",
  /** column name */
  WIDE_REFUNDS_FIFTH = "wide_refunds_fifth",
  /** column name */
  WIDE_REFUNDS_FIRST = "wide_refunds_first",
  /** column name */
  WIDE_REFUNDS_FOURTH = "wide_refunds_fourth",
  /** column name */
  WIDE_REFUNDS_SECOND = "wide_refunds_second",
  /** column name */
  WIDE_REFUNDS_SEVENTH = "wide_refunds_seventh",
  /** column name */
  WIDE_REFUNDS_SIXTH = "wide_refunds_sixth",
  /** column name */
  WIDE_REFUNDS_THIRD = "wide_refunds_third",
  /** column name */
  WIN_REFUNDS_FIRST = "win_refunds_first",
  /** column name */
  WIN_REFUNDS_SECOND = "win_refunds_second",
  /** column name */
  WIN_REFUNDS_THIRD = "win_refunds_third",
}

/** aggregate var_pop on columns */
export type RefundsVarPopFields = {
  __typename?: "refunds_var_pop_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "refunds" */
export type RefundsVarPopOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RefundsVarSampFields = {
  __typename?: "refunds_var_samp_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "refunds" */
export type RefundsVarSampOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RefundsVarianceFields = {
  __typename?: "refunds_variance_fields";
  horse_num_multi_fifth?: Maybe<Scalars["Float"]>;
  horse_num_multi_first?: Maybe<Scalars["Float"]>;
  horse_num_multi_fourth?: Maybe<Scalars["Float"]>;
  horse_num_multi_second?: Maybe<Scalars["Float"]>;
  horse_num_multi_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrenpuku_third?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_first?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_second?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_sanrentan_third?: Maybe<Scalars["Float"]>;
  horse_num_umaren_first?: Maybe<Scalars["Float"]>;
  horse_num_umaren_second?: Maybe<Scalars["Float"]>;
  horse_num_umaren_third?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fifth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_first?: Maybe<Scalars["Float"]>;
  horse_num_umatan_fourth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_second?: Maybe<Scalars["Float"]>;
  horse_num_umatan_sixth?: Maybe<Scalars["Float"]>;
  horse_num_umatan_third?: Maybe<Scalars["Float"]>;
  horse_num_wide_fifth?: Maybe<Scalars["Float"]>;
  horse_num_wide_first?: Maybe<Scalars["Float"]>;
  horse_num_wide_fourth?: Maybe<Scalars["Float"]>;
  horse_num_wide_second?: Maybe<Scalars["Float"]>;
  horse_num_wide_seventh?: Maybe<Scalars["Float"]>;
  horse_num_wide_sixth?: Maybe<Scalars["Float"]>;
  horse_num_wide_third?: Maybe<Scalars["Float"]>;
  horse_num_win_first?: Maybe<Scalars["Float"]>;
  horse_num_win_second?: Maybe<Scalars["Float"]>;
  horse_num_win_third?: Maybe<Scalars["Float"]>;
  multi_refunds_fifth?: Maybe<Scalars["Float"]>;
  multi_refunds_first?: Maybe<Scalars["Float"]>;
  multi_refunds_fourth?: Maybe<Scalars["Float"]>;
  multi_refunds_second?: Maybe<Scalars["Float"]>;
  multi_refunds_third?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_first?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_second?: Maybe<Scalars["Float"]>;
  sanrenpuku_refunds_third?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fifth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_first?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_fourth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_second?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_sixth?: Maybe<Scalars["Float"]>;
  sanrentan_refunds_third?: Maybe<Scalars["Float"]>;
  umaren_refunds_first?: Maybe<Scalars["Float"]>;
  umaren_refunds_second?: Maybe<Scalars["Float"]>;
  umaren_refunds_third?: Maybe<Scalars["Float"]>;
  umatan_refunds_fifth?: Maybe<Scalars["Float"]>;
  umatan_refunds_first?: Maybe<Scalars["Float"]>;
  umatan_refunds_fourth?: Maybe<Scalars["Float"]>;
  umatan_refunds_second?: Maybe<Scalars["Float"]>;
  umatan_refunds_sixth?: Maybe<Scalars["Float"]>;
  umatan_refunds_third?: Maybe<Scalars["Float"]>;
  wakuban_first?: Maybe<Scalars["Float"]>;
  wakuban_second?: Maybe<Scalars["Float"]>;
  wakuban_third?: Maybe<Scalars["Float"]>;
  wakuren_refunds_first?: Maybe<Scalars["Float"]>;
  wakuren_refunds_second?: Maybe<Scalars["Float"]>;
  wakuren_refunds_third?: Maybe<Scalars["Float"]>;
  wide_refunds_fifth?: Maybe<Scalars["Float"]>;
  wide_refunds_first?: Maybe<Scalars["Float"]>;
  wide_refunds_fourth?: Maybe<Scalars["Float"]>;
  wide_refunds_second?: Maybe<Scalars["Float"]>;
  wide_refunds_seventh?: Maybe<Scalars["Float"]>;
  wide_refunds_sixth?: Maybe<Scalars["Float"]>;
  wide_refunds_third?: Maybe<Scalars["Float"]>;
  win_refunds_first?: Maybe<Scalars["Float"]>;
  win_refunds_second?: Maybe<Scalars["Float"]>;
  win_refunds_third?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "refunds" */
export type RefundsVarianceOrderBy = {
  horse_num_multi_fifth?: Maybe<OrderBy>;
  horse_num_multi_first?: Maybe<OrderBy>;
  horse_num_multi_fourth?: Maybe<OrderBy>;
  horse_num_multi_second?: Maybe<OrderBy>;
  horse_num_multi_third?: Maybe<OrderBy>;
  horse_num_sanrenpuku_first?: Maybe<OrderBy>;
  horse_num_sanrenpuku_second?: Maybe<OrderBy>;
  horse_num_sanrenpuku_third?: Maybe<OrderBy>;
  horse_num_sanrentan_fifth?: Maybe<OrderBy>;
  horse_num_sanrentan_first?: Maybe<OrderBy>;
  horse_num_sanrentan_fourth?: Maybe<OrderBy>;
  horse_num_sanrentan_second?: Maybe<OrderBy>;
  horse_num_sanrentan_sixth?: Maybe<OrderBy>;
  horse_num_sanrentan_third?: Maybe<OrderBy>;
  horse_num_umaren_first?: Maybe<OrderBy>;
  horse_num_umaren_second?: Maybe<OrderBy>;
  horse_num_umaren_third?: Maybe<OrderBy>;
  horse_num_umatan_fifth?: Maybe<OrderBy>;
  horse_num_umatan_first?: Maybe<OrderBy>;
  horse_num_umatan_fourth?: Maybe<OrderBy>;
  horse_num_umatan_second?: Maybe<OrderBy>;
  horse_num_umatan_sixth?: Maybe<OrderBy>;
  horse_num_umatan_third?: Maybe<OrderBy>;
  horse_num_wide_fifth?: Maybe<OrderBy>;
  horse_num_wide_first?: Maybe<OrderBy>;
  horse_num_wide_fourth?: Maybe<OrderBy>;
  horse_num_wide_second?: Maybe<OrderBy>;
  horse_num_wide_seventh?: Maybe<OrderBy>;
  horse_num_wide_sixth?: Maybe<OrderBy>;
  horse_num_wide_third?: Maybe<OrderBy>;
  horse_num_win_first?: Maybe<OrderBy>;
  horse_num_win_second?: Maybe<OrderBy>;
  horse_num_win_third?: Maybe<OrderBy>;
  multi_refunds_fifth?: Maybe<OrderBy>;
  multi_refunds_first?: Maybe<OrderBy>;
  multi_refunds_fourth?: Maybe<OrderBy>;
  multi_refunds_second?: Maybe<OrderBy>;
  multi_refunds_third?: Maybe<OrderBy>;
  sanrenpuku_refunds_first?: Maybe<OrderBy>;
  sanrenpuku_refunds_second?: Maybe<OrderBy>;
  sanrenpuku_refunds_third?: Maybe<OrderBy>;
  sanrentan_refunds_fifth?: Maybe<OrderBy>;
  sanrentan_refunds_first?: Maybe<OrderBy>;
  sanrentan_refunds_fourth?: Maybe<OrderBy>;
  sanrentan_refunds_second?: Maybe<OrderBy>;
  sanrentan_refunds_sixth?: Maybe<OrderBy>;
  sanrentan_refunds_third?: Maybe<OrderBy>;
  umaren_refunds_first?: Maybe<OrderBy>;
  umaren_refunds_second?: Maybe<OrderBy>;
  umaren_refunds_third?: Maybe<OrderBy>;
  umatan_refunds_fifth?: Maybe<OrderBy>;
  umatan_refunds_first?: Maybe<OrderBy>;
  umatan_refunds_fourth?: Maybe<OrderBy>;
  umatan_refunds_second?: Maybe<OrderBy>;
  umatan_refunds_sixth?: Maybe<OrderBy>;
  umatan_refunds_third?: Maybe<OrderBy>;
  wakuban_first?: Maybe<OrderBy>;
  wakuban_second?: Maybe<OrderBy>;
  wakuban_third?: Maybe<OrderBy>;
  wakuren_refunds_first?: Maybe<OrderBy>;
  wakuren_refunds_second?: Maybe<OrderBy>;
  wakuren_refunds_third?: Maybe<OrderBy>;
  wide_refunds_fifth?: Maybe<OrderBy>;
  wide_refunds_first?: Maybe<OrderBy>;
  wide_refunds_fourth?: Maybe<OrderBy>;
  wide_refunds_second?: Maybe<OrderBy>;
  wide_refunds_seventh?: Maybe<OrderBy>;
  wide_refunds_sixth?: Maybe<OrderBy>;
  wide_refunds_third?: Maybe<OrderBy>;
  win_refunds_first?: Maybe<OrderBy>;
  win_refunds_second?: Maybe<OrderBy>;
  win_refunds_third?: Maybe<OrderBy>;
};

/** columns and relationships of "results" */
export type Results = {
  __typename?: "results";
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["String"]>;
  first_horse_name?: Maybe<Scalars["String"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace?: Maybe<Scalars["String"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace?: Maybe<Scalars["String"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  race_result_key?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["String"]>;
  remarks?: Maybe<Scalars["String"]>;
  result_id: Scalars["String"];
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "results" */
export type ResultsAggregate = {
  __typename?: "results_aggregate";
  aggregate?: Maybe<ResultsAggregateFields>;
  nodes: Array<Results>;
};

/** aggregate fields of "results" */
export type ResultsAggregateFields = {
  __typename?: "results_aggregate_fields";
  avg?: Maybe<ResultsAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ResultsMaxFields>;
  min?: Maybe<ResultsMinFields>;
  stddev?: Maybe<ResultsStddevFields>;
  stddev_pop?: Maybe<ResultsStddevPopFields>;
  stddev_samp?: Maybe<ResultsStddevSampFields>;
  sum?: Maybe<ResultsSumFields>;
  var_pop?: Maybe<ResultsVarPopFields>;
  var_samp?: Maybe<ResultsVarSampFields>;
  variance?: Maybe<ResultsVarianceFields>;
};

/** aggregate fields of "results" */
export type ResultsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ResultsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "results" */
export type ResultsAggregateOrderBy = {
  avg?: Maybe<ResultsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ResultsMaxOrderBy>;
  min?: Maybe<ResultsMinOrderBy>;
  stddev?: Maybe<ResultsStddevOrderBy>;
  stddev_pop?: Maybe<ResultsStddevPopOrderBy>;
  stddev_samp?: Maybe<ResultsStddevSampOrderBy>;
  sum?: Maybe<ResultsSumOrderBy>;
  var_pop?: Maybe<ResultsVarPopOrderBy>;
  var_samp?: Maybe<ResultsVarSampOrderBy>;
  variance?: Maybe<ResultsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "results" */
export type ResultsArrRelInsertInput = {
  data: Array<ResultsInsertInput>;
  on_conflict?: Maybe<ResultsOnConflict>;
};

/** aggregate avg on columns */
export type ResultsAvgFields = {
  __typename?: "results_avg_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "results" */
export type ResultsAvgOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "results". All fields are combined with a logical 'AND'. */
export type ResultsBoolExp = {
  _and?: Maybe<Array<Maybe<ResultsBoolExp>>>;
  _not?: Maybe<ResultsBoolExp>;
  _or?: Maybe<Array<Maybe<ResultsBoolExp>>>;
  abnormality?: Maybe<IntComparisonExp>;
  after_three_f_time?: Maybe<IntComparisonExp>;
  after_three_first_diff?: Maybe<IntComparisonExp>;
  baba_condition?: Maybe<IntComparisonExp>;
  baba_diff?: Maybe<IntComparisonExp>;
  basis_weight?: Maybe<IntComparisonExp>;
  behind_unfavorable?: Maybe<IntComparisonExp>;
  body_code?: Maybe<IntComparisonExp>;
  class_code?: Maybe<IntComparisonExp>;
  confirm_multi_odds?: Maybe<FloatComparisonExp>;
  confirm_win_odds?: Maybe<FloatComparisonExp>;
  corner_rank_four?: Maybe<IntComparisonExp>;
  corner_rank_one?: Maybe<IntComparisonExp>;
  corner_rank_three?: Maybe<IntComparisonExp>;
  corner_rank_two?: Maybe<IntComparisonExp>;
  course_removal?: Maybe<IntComparisonExp>;
  date?: Maybe<StringComparisonExp>;
  first_horse_name?: Maybe<StringComparisonExp>;
  first_time_diff?: Maybe<IntComparisonExp>;
  four_course_position?: Maybe<IntComparisonExp>;
  horse_num?: Maybe<IntComparisonExp>;
  horse_pace?: Maybe<StringComparisonExp>;
  horse_pace_flow?: Maybe<IntComparisonExp>;
  idm?: Maybe<IntComparisonExp>;
  income_prize?: Maybe<IntComparisonExp>;
  med_unfavorable?: Maybe<IntComparisonExp>;
  multi_odds_ten?: Maybe<FloatComparisonExp>;
  pace?: Maybe<IntComparisonExp>;
  pace_index?: Maybe<FloatComparisonExp>;
  pay_out_multi?: Maybe<IntComparisonExp>;
  pay_out_win?: Maybe<IntComparisonExp>;
  pedigree_register?: Maybe<StringComparisonExp>;
  positioning?: Maybe<IntComparisonExp>;
  pre_three_f_time?: Maybe<IntComparisonExp>;
  pre_three_first_diff?: Maybe<IntComparisonExp>;
  pre_unfavorable?: Maybe<IntComparisonExp>;
  primary_point?: Maybe<IntComparisonExp>;
  prize?: Maybe<IntComparisonExp>;
  race?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
  race_p_index?: Maybe<FloatComparisonExp>;
  race_pace?: Maybe<StringComparisonExp>;
  race_pace_flow?: Maybe<IntComparisonExp>;
  race_result_key?: Maybe<StringComparisonExp>;
  rank?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  result_id?: Maybe<StringComparisonExp>;
  rising_code?: Maybe<IntComparisonExp>;
  rising_index?: Maybe<FloatComparisonExp>;
  sign_code?: Maybe<IntComparisonExp>;
  slow_start?: Maybe<IntComparisonExp>;
  ten_index?: Maybe<FloatComparisonExp>;
  time?: Maybe<IntComparisonExp>;
  unfavorable?: Maybe<IntComparisonExp>;
  win_odds_ten?: Maybe<FloatComparisonExp>;
  win_popular_rank?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "results" */
export enum ResultsConstraint {
  /** unique or primary key constraint */
  RESULTS_PKEY = "results_pkey",
}

/** input type for incrementing integer column in table "results" */
export type ResultsIncInput = {
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "results" */
export type ResultsInsertInput = {
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["String"]>;
  first_horse_name?: Maybe<Scalars["String"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace?: Maybe<Scalars["String"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace?: Maybe<Scalars["String"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  race_result_key?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["String"]>;
  remarks?: Maybe<Scalars["String"]>;
  result_id?: Maybe<Scalars["String"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type ResultsMaxFields = {
  __typename?: "results_max_fields";
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["String"]>;
  first_horse_name?: Maybe<Scalars["String"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace?: Maybe<Scalars["String"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace?: Maybe<Scalars["String"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  race_result_key?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["String"]>;
  remarks?: Maybe<Scalars["String"]>;
  result_id?: Maybe<Scalars["String"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "results" */
export type ResultsMaxOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  first_horse_name?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  race_result_key?: Maybe<OrderBy>;
  rank?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  result_id?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ResultsMinFields = {
  __typename?: "results_min_fields";
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["String"]>;
  first_horse_name?: Maybe<Scalars["String"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace?: Maybe<Scalars["String"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace?: Maybe<Scalars["String"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  race_result_key?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["String"]>;
  remarks?: Maybe<Scalars["String"]>;
  result_id?: Maybe<Scalars["String"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "results" */
export type ResultsMinOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  first_horse_name?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  race_result_key?: Maybe<OrderBy>;
  rank?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  result_id?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** response of any mutation on the table "results" */
export type ResultsMutationResponse = {
  __typename?: "results_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Results>;
};

/** input type for inserting object relation for remote table "results" */
export type ResultsObjRelInsertInput = {
  data: ResultsInsertInput;
  on_conflict?: Maybe<ResultsOnConflict>;
};

/** on conflict condition type for table "results" */
export type ResultsOnConflict = {
  constraint: ResultsConstraint;
  update_columns: Array<ResultsUpdateColumn>;
  where?: Maybe<ResultsBoolExp>;
};

/** ordering options when selecting data from "results" */
export type ResultsOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  first_horse_name?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  pedigree_register?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  race_result_key?: Maybe<OrderBy>;
  rank?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  result_id?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** primary key columns input for table: "results" */
export type ResultsPkColumnsInput = {
  result_id: Scalars["String"];
};

/** select columns of table "results" */
export enum ResultsSelectColumn {
  /** column name */
  ABNORMALITY = "abnormality",
  /** column name */
  AFTER_THREE_F_TIME = "after_three_f_time",
  /** column name */
  AFTER_THREE_FIRST_DIFF = "after_three_first_diff",
  /** column name */
  BABA_CONDITION = "baba_condition",
  /** column name */
  BABA_DIFF = "baba_diff",
  /** column name */
  BASIS_WEIGHT = "basis_weight",
  /** column name */
  BEHIND_UNFAVORABLE = "behind_unfavorable",
  /** column name */
  BODY_CODE = "body_code",
  /** column name */
  CLASS_CODE = "class_code",
  /** column name */
  CONFIRM_MULTI_ODDS = "confirm_multi_odds",
  /** column name */
  CONFIRM_WIN_ODDS = "confirm_win_odds",
  /** column name */
  CORNER_RANK_FOUR = "corner_rank_four",
  /** column name */
  CORNER_RANK_ONE = "corner_rank_one",
  /** column name */
  CORNER_RANK_THREE = "corner_rank_three",
  /** column name */
  CORNER_RANK_TWO = "corner_rank_two",
  /** column name */
  COURSE_REMOVAL = "course_removal",
  /** column name */
  DATE = "date",
  /** column name */
  FIRST_HORSE_NAME = "first_horse_name",
  /** column name */
  FIRST_TIME_DIFF = "first_time_diff",
  /** column name */
  FOUR_COURSE_POSITION = "four_course_position",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  HORSE_PACE = "horse_pace",
  /** column name */
  HORSE_PACE_FLOW = "horse_pace_flow",
  /** column name */
  IDM = "idm",
  /** column name */
  INCOME_PRIZE = "income_prize",
  /** column name */
  MED_UNFAVORABLE = "med_unfavorable",
  /** column name */
  MULTI_ODDS_TEN = "multi_odds_ten",
  /** column name */
  PACE = "pace",
  /** column name */
  PACE_INDEX = "pace_index",
  /** column name */
  PAY_OUT_MULTI = "pay_out_multi",
  /** column name */
  PAY_OUT_WIN = "pay_out_win",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  POSITIONING = "positioning",
  /** column name */
  PRE_THREE_F_TIME = "pre_three_f_time",
  /** column name */
  PRE_THREE_FIRST_DIFF = "pre_three_first_diff",
  /** column name */
  PRE_UNFAVORABLE = "pre_unfavorable",
  /** column name */
  PRIMARY_POINT = "primary_point",
  /** column name */
  PRIZE = "prize",
  /** column name */
  RACE = "race",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  RACE_P_INDEX = "race_p_index",
  /** column name */
  RACE_PACE = "race_pace",
  /** column name */
  RACE_PACE_FLOW = "race_pace_flow",
  /** column name */
  RACE_RESULT_KEY = "race_result_key",
  /** column name */
  RANK = "rank",
  /** column name */
  REMARKS = "remarks",
  /** column name */
  RESULT_ID = "result_id",
  /** column name */
  RISING_CODE = "rising_code",
  /** column name */
  RISING_INDEX = "rising_index",
  /** column name */
  SIGN_CODE = "sign_code",
  /** column name */
  SLOW_START = "slow_start",
  /** column name */
  TEN_INDEX = "ten_index",
  /** column name */
  TIME = "time",
  /** column name */
  UNFAVORABLE = "unfavorable",
  /** column name */
  WIN_ODDS_TEN = "win_odds_ten",
  /** column name */
  WIN_POPULAR_RANK = "win_popular_rank",
}

/** input type for updating data in table "results" */
export type ResultsSetInput = {
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["String"]>;
  first_horse_name?: Maybe<Scalars["String"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace?: Maybe<Scalars["String"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  pedigree_register?: Maybe<Scalars["String"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace?: Maybe<Scalars["String"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  race_result_key?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["String"]>;
  remarks?: Maybe<Scalars["String"]>;
  result_id?: Maybe<Scalars["String"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type ResultsStddevFields = {
  __typename?: "results_stddev_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "results" */
export type ResultsStddevOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ResultsStddevPopFields = {
  __typename?: "results_stddev_pop_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "results" */
export type ResultsStddevPopOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ResultsStddevSampFields = {
  __typename?: "results_stddev_samp_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "results" */
export type ResultsStddevSampOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ResultsSumFields = {
  __typename?: "results_sum_fields";
  abnormality?: Maybe<Scalars["Int"]>;
  after_three_f_time?: Maybe<Scalars["Int"]>;
  after_three_first_diff?: Maybe<Scalars["Int"]>;
  baba_condition?: Maybe<Scalars["Int"]>;
  baba_diff?: Maybe<Scalars["Int"]>;
  basis_weight?: Maybe<Scalars["Int"]>;
  behind_unfavorable?: Maybe<Scalars["Int"]>;
  body_code?: Maybe<Scalars["Int"]>;
  class_code?: Maybe<Scalars["Int"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Int"]>;
  corner_rank_one?: Maybe<Scalars["Int"]>;
  corner_rank_three?: Maybe<Scalars["Int"]>;
  corner_rank_two?: Maybe<Scalars["Int"]>;
  course_removal?: Maybe<Scalars["Int"]>;
  first_time_diff?: Maybe<Scalars["Int"]>;
  four_course_position?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  horse_pace_flow?: Maybe<Scalars["Int"]>;
  idm?: Maybe<Scalars["Int"]>;
  income_prize?: Maybe<Scalars["Int"]>;
  med_unfavorable?: Maybe<Scalars["Int"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Int"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Int"]>;
  pay_out_win?: Maybe<Scalars["Int"]>;
  positioning?: Maybe<Scalars["Int"]>;
  pre_three_f_time?: Maybe<Scalars["Int"]>;
  pre_three_first_diff?: Maybe<Scalars["Int"]>;
  pre_unfavorable?: Maybe<Scalars["Int"]>;
  primary_point?: Maybe<Scalars["Int"]>;
  prize?: Maybe<Scalars["Int"]>;
  race?: Maybe<Scalars["Int"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Int"]>;
  rising_code?: Maybe<Scalars["Int"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Int"]>;
  slow_start?: Maybe<Scalars["Int"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Int"]>;
  unfavorable?: Maybe<Scalars["Int"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "results" */
export type ResultsSumOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** update columns of table "results" */
export enum ResultsUpdateColumn {
  /** column name */
  ABNORMALITY = "abnormality",
  /** column name */
  AFTER_THREE_F_TIME = "after_three_f_time",
  /** column name */
  AFTER_THREE_FIRST_DIFF = "after_three_first_diff",
  /** column name */
  BABA_CONDITION = "baba_condition",
  /** column name */
  BABA_DIFF = "baba_diff",
  /** column name */
  BASIS_WEIGHT = "basis_weight",
  /** column name */
  BEHIND_UNFAVORABLE = "behind_unfavorable",
  /** column name */
  BODY_CODE = "body_code",
  /** column name */
  CLASS_CODE = "class_code",
  /** column name */
  CONFIRM_MULTI_ODDS = "confirm_multi_odds",
  /** column name */
  CONFIRM_WIN_ODDS = "confirm_win_odds",
  /** column name */
  CORNER_RANK_FOUR = "corner_rank_four",
  /** column name */
  CORNER_RANK_ONE = "corner_rank_one",
  /** column name */
  CORNER_RANK_THREE = "corner_rank_three",
  /** column name */
  CORNER_RANK_TWO = "corner_rank_two",
  /** column name */
  COURSE_REMOVAL = "course_removal",
  /** column name */
  DATE = "date",
  /** column name */
  FIRST_HORSE_NAME = "first_horse_name",
  /** column name */
  FIRST_TIME_DIFF = "first_time_diff",
  /** column name */
  FOUR_COURSE_POSITION = "four_course_position",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  HORSE_PACE = "horse_pace",
  /** column name */
  HORSE_PACE_FLOW = "horse_pace_flow",
  /** column name */
  IDM = "idm",
  /** column name */
  INCOME_PRIZE = "income_prize",
  /** column name */
  MED_UNFAVORABLE = "med_unfavorable",
  /** column name */
  MULTI_ODDS_TEN = "multi_odds_ten",
  /** column name */
  PACE = "pace",
  /** column name */
  PACE_INDEX = "pace_index",
  /** column name */
  PAY_OUT_MULTI = "pay_out_multi",
  /** column name */
  PAY_OUT_WIN = "pay_out_win",
  /** column name */
  PEDIGREE_REGISTER = "pedigree_register",
  /** column name */
  POSITIONING = "positioning",
  /** column name */
  PRE_THREE_F_TIME = "pre_three_f_time",
  /** column name */
  PRE_THREE_FIRST_DIFF = "pre_three_first_diff",
  /** column name */
  PRE_UNFAVORABLE = "pre_unfavorable",
  /** column name */
  PRIMARY_POINT = "primary_point",
  /** column name */
  PRIZE = "prize",
  /** column name */
  RACE = "race",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  RACE_P_INDEX = "race_p_index",
  /** column name */
  RACE_PACE = "race_pace",
  /** column name */
  RACE_PACE_FLOW = "race_pace_flow",
  /** column name */
  RACE_RESULT_KEY = "race_result_key",
  /** column name */
  RANK = "rank",
  /** column name */
  REMARKS = "remarks",
  /** column name */
  RESULT_ID = "result_id",
  /** column name */
  RISING_CODE = "rising_code",
  /** column name */
  RISING_INDEX = "rising_index",
  /** column name */
  SIGN_CODE = "sign_code",
  /** column name */
  SLOW_START = "slow_start",
  /** column name */
  TEN_INDEX = "ten_index",
  /** column name */
  TIME = "time",
  /** column name */
  UNFAVORABLE = "unfavorable",
  /** column name */
  WIN_ODDS_TEN = "win_odds_ten",
  /** column name */
  WIN_POPULAR_RANK = "win_popular_rank",
}

/** aggregate var_pop on columns */
export type ResultsVarPopFields = {
  __typename?: "results_var_pop_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "results" */
export type ResultsVarPopOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ResultsVarSampFields = {
  __typename?: "results_var_samp_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "results" */
export type ResultsVarSampOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ResultsVarianceFields = {
  __typename?: "results_variance_fields";
  abnormality?: Maybe<Scalars["Float"]>;
  after_three_f_time?: Maybe<Scalars["Float"]>;
  after_three_first_diff?: Maybe<Scalars["Float"]>;
  baba_condition?: Maybe<Scalars["Float"]>;
  baba_diff?: Maybe<Scalars["Float"]>;
  basis_weight?: Maybe<Scalars["Float"]>;
  behind_unfavorable?: Maybe<Scalars["Float"]>;
  body_code?: Maybe<Scalars["Float"]>;
  class_code?: Maybe<Scalars["Float"]>;
  confirm_multi_odds?: Maybe<Scalars["Float"]>;
  confirm_win_odds?: Maybe<Scalars["Float"]>;
  corner_rank_four?: Maybe<Scalars["Float"]>;
  corner_rank_one?: Maybe<Scalars["Float"]>;
  corner_rank_three?: Maybe<Scalars["Float"]>;
  corner_rank_two?: Maybe<Scalars["Float"]>;
  course_removal?: Maybe<Scalars["Float"]>;
  first_time_diff?: Maybe<Scalars["Float"]>;
  four_course_position?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  horse_pace_flow?: Maybe<Scalars["Float"]>;
  idm?: Maybe<Scalars["Float"]>;
  income_prize?: Maybe<Scalars["Float"]>;
  med_unfavorable?: Maybe<Scalars["Float"]>;
  multi_odds_ten?: Maybe<Scalars["Float"]>;
  pace?: Maybe<Scalars["Float"]>;
  pace_index?: Maybe<Scalars["Float"]>;
  pay_out_multi?: Maybe<Scalars["Float"]>;
  pay_out_win?: Maybe<Scalars["Float"]>;
  positioning?: Maybe<Scalars["Float"]>;
  pre_three_f_time?: Maybe<Scalars["Float"]>;
  pre_three_first_diff?: Maybe<Scalars["Float"]>;
  pre_unfavorable?: Maybe<Scalars["Float"]>;
  primary_point?: Maybe<Scalars["Float"]>;
  prize?: Maybe<Scalars["Float"]>;
  race?: Maybe<Scalars["Float"]>;
  race_p_index?: Maybe<Scalars["Float"]>;
  race_pace_flow?: Maybe<Scalars["Float"]>;
  rising_code?: Maybe<Scalars["Float"]>;
  rising_index?: Maybe<Scalars["Float"]>;
  sign_code?: Maybe<Scalars["Float"]>;
  slow_start?: Maybe<Scalars["Float"]>;
  ten_index?: Maybe<Scalars["Float"]>;
  time?: Maybe<Scalars["Float"]>;
  unfavorable?: Maybe<Scalars["Float"]>;
  win_odds_ten?: Maybe<Scalars["Float"]>;
  win_popular_rank?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "results" */
export type ResultsVarianceOrderBy = {
  abnormality?: Maybe<OrderBy>;
  after_three_f_time?: Maybe<OrderBy>;
  after_three_first_diff?: Maybe<OrderBy>;
  baba_condition?: Maybe<OrderBy>;
  baba_diff?: Maybe<OrderBy>;
  basis_weight?: Maybe<OrderBy>;
  behind_unfavorable?: Maybe<OrderBy>;
  body_code?: Maybe<OrderBy>;
  class_code?: Maybe<OrderBy>;
  confirm_multi_odds?: Maybe<OrderBy>;
  confirm_win_odds?: Maybe<OrderBy>;
  corner_rank_four?: Maybe<OrderBy>;
  corner_rank_one?: Maybe<OrderBy>;
  corner_rank_three?: Maybe<OrderBy>;
  corner_rank_two?: Maybe<OrderBy>;
  course_removal?: Maybe<OrderBy>;
  first_time_diff?: Maybe<OrderBy>;
  four_course_position?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  horse_pace_flow?: Maybe<OrderBy>;
  idm?: Maybe<OrderBy>;
  income_prize?: Maybe<OrderBy>;
  med_unfavorable?: Maybe<OrderBy>;
  multi_odds_ten?: Maybe<OrderBy>;
  pace?: Maybe<OrderBy>;
  pace_index?: Maybe<OrderBy>;
  pay_out_multi?: Maybe<OrderBy>;
  pay_out_win?: Maybe<OrderBy>;
  positioning?: Maybe<OrderBy>;
  pre_three_f_time?: Maybe<OrderBy>;
  pre_three_first_diff?: Maybe<OrderBy>;
  pre_unfavorable?: Maybe<OrderBy>;
  primary_point?: Maybe<OrderBy>;
  prize?: Maybe<OrderBy>;
  race?: Maybe<OrderBy>;
  race_p_index?: Maybe<OrderBy>;
  race_pace_flow?: Maybe<OrderBy>;
  rising_code?: Maybe<OrderBy>;
  rising_index?: Maybe<OrderBy>;
  sign_code?: Maybe<OrderBy>;
  slow_start?: Maybe<OrderBy>;
  ten_index?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  unfavorable?: Maybe<OrderBy>;
  win_odds_ten?: Maybe<OrderBy>;
  win_popular_rank?: Maybe<OrderBy>;
};

/**
 * ローテーションviewのリザルトテーブル
 *
 *
 * columns and relationships of "rotation_result"
 */
export type RotationResult = {
  __typename?: "rotation_result";
  common_race_name: Scalars["String"];
  first_count: Scalars["bigint"];
  lag_common_race_name: Scalars["String"];
  out_count: Scalars["bigint"];
  second_count: Scalars["bigint"];
  third_count: Scalars["bigint"];
  total_count: Scalars["bigint"];
};

/** aggregated selection of "rotation_result" */
export type RotationResultAggregate = {
  __typename?: "rotation_result_aggregate";
  aggregate?: Maybe<RotationResultAggregateFields>;
  nodes: Array<RotationResult>;
};

/** aggregate fields of "rotation_result" */
export type RotationResultAggregateFields = {
  __typename?: "rotation_result_aggregate_fields";
  avg?: Maybe<RotationResultAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RotationResultMaxFields>;
  min?: Maybe<RotationResultMinFields>;
  stddev?: Maybe<RotationResultStddevFields>;
  stddev_pop?: Maybe<RotationResultStddevPopFields>;
  stddev_samp?: Maybe<RotationResultStddevSampFields>;
  sum?: Maybe<RotationResultSumFields>;
  var_pop?: Maybe<RotationResultVarPopFields>;
  var_samp?: Maybe<RotationResultVarSampFields>;
  variance?: Maybe<RotationResultVarianceFields>;
};

/** aggregate fields of "rotation_result" */
export type RotationResultAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RotationResultSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rotation_result" */
export type RotationResultAggregateOrderBy = {
  avg?: Maybe<RotationResultAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RotationResultMaxOrderBy>;
  min?: Maybe<RotationResultMinOrderBy>;
  stddev?: Maybe<RotationResultStddevOrderBy>;
  stddev_pop?: Maybe<RotationResultStddevPopOrderBy>;
  stddev_samp?: Maybe<RotationResultStddevSampOrderBy>;
  sum?: Maybe<RotationResultSumOrderBy>;
  var_pop?: Maybe<RotationResultVarPopOrderBy>;
  var_samp?: Maybe<RotationResultVarSampOrderBy>;
  variance?: Maybe<RotationResultVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "rotation_result" */
export type RotationResultArrRelInsertInput = {
  data: Array<RotationResultInsertInput>;
  on_conflict?: Maybe<RotationResultOnConflict>;
};

/** aggregate avg on columns */
export type RotationResultAvgFields = {
  __typename?: "rotation_result_avg_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "rotation_result" */
export type RotationResultAvgOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "rotation_result". All fields are combined with a logical 'AND'. */
export type RotationResultBoolExp = {
  _and?: Maybe<Array<Maybe<RotationResultBoolExp>>>;
  _not?: Maybe<RotationResultBoolExp>;
  _or?: Maybe<Array<Maybe<RotationResultBoolExp>>>;
  common_race_name?: Maybe<StringComparisonExp>;
  first_count?: Maybe<BigintComparisonExp>;
  lag_common_race_name?: Maybe<StringComparisonExp>;
  out_count?: Maybe<BigintComparisonExp>;
  second_count?: Maybe<BigintComparisonExp>;
  third_count?: Maybe<BigintComparisonExp>;
  total_count?: Maybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "rotation_result" */
export enum RotationResultConstraint {
  /** unique or primary key constraint */
  LOTATION_RESULT_PKEY = "lotation_result_pkey",
}

/** input type for incrementing integer column in table "rotation_result" */
export type RotationResultIncInput = {
  first_count?: Maybe<Scalars["bigint"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "rotation_result" */
export type RotationResultInsertInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  lag_common_race_name?: Maybe<Scalars["String"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate max on columns */
export type RotationResultMaxFields = {
  __typename?: "rotation_result_max_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  lag_common_race_name?: Maybe<Scalars["String"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "rotation_result" */
export type RotationResultMaxOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  lag_common_race_name?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RotationResultMinFields = {
  __typename?: "rotation_result_min_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  lag_common_race_name?: Maybe<Scalars["String"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "rotation_result" */
export type RotationResultMinOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  lag_common_race_name?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** response of any mutation on the table "rotation_result" */
export type RotationResultMutationResponse = {
  __typename?: "rotation_result_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<RotationResult>;
};

/** input type for inserting object relation for remote table "rotation_result" */
export type RotationResultObjRelInsertInput = {
  data: RotationResultInsertInput;
  on_conflict?: Maybe<RotationResultOnConflict>;
};

/** on conflict condition type for table "rotation_result" */
export type RotationResultOnConflict = {
  constraint: RotationResultConstraint;
  update_columns: Array<RotationResultUpdateColumn>;
  where?: Maybe<RotationResultBoolExp>;
};

/** ordering options when selecting data from "rotation_result" */
export type RotationResultOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  first_count?: Maybe<OrderBy>;
  lag_common_race_name?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** primary key columns input for table: "rotation_result" */
export type RotationResultPkColumnsInput = {
  common_race_name: Scalars["String"];
};

/** select columns of table "rotation_result" */
export enum RotationResultSelectColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  LAG_COMMON_RACE_NAME = "lag_common_race_name",
  /** column name */
  OUT_COUNT = "out_count",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
  /** column name */
  TOTAL_COUNT = "total_count",
}

/** input type for updating data in table "rotation_result" */
export type RotationResultSetInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  first_count?: Maybe<Scalars["bigint"]>;
  lag_common_race_name?: Maybe<Scalars["String"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** aggregate stddev on columns */
export type RotationResultStddevFields = {
  __typename?: "rotation_result_stddev_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "rotation_result" */
export type RotationResultStddevOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RotationResultStddevPopFields = {
  __typename?: "rotation_result_stddev_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "rotation_result" */
export type RotationResultStddevPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RotationResultStddevSampFields = {
  __typename?: "rotation_result_stddev_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "rotation_result" */
export type RotationResultStddevSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RotationResultSumFields = {
  __typename?: "rotation_result_sum_fields";
  first_count?: Maybe<Scalars["bigint"]>;
  out_count?: Maybe<Scalars["bigint"]>;
  second_count?: Maybe<Scalars["bigint"]>;
  third_count?: Maybe<Scalars["bigint"]>;
  total_count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "rotation_result" */
export type RotationResultSumOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** update columns of table "rotation_result" */
export enum RotationResultUpdateColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  FIRST_COUNT = "first_count",
  /** column name */
  LAG_COMMON_RACE_NAME = "lag_common_race_name",
  /** column name */
  OUT_COUNT = "out_count",
  /** column name */
  SECOND_COUNT = "second_count",
  /** column name */
  THIRD_COUNT = "third_count",
  /** column name */
  TOTAL_COUNT = "total_count",
}

/** aggregate var_pop on columns */
export type RotationResultVarPopFields = {
  __typename?: "rotation_result_var_pop_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "rotation_result" */
export type RotationResultVarPopOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RotationResultVarSampFields = {
  __typename?: "rotation_result_var_samp_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "rotation_result" */
export type RotationResultVarSampOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RotationResultVarianceFields = {
  __typename?: "rotation_result_variance_fields";
  first_count?: Maybe<Scalars["Float"]>;
  out_count?: Maybe<Scalars["Float"]>;
  second_count?: Maybe<Scalars["Float"]>;
  third_count?: Maybe<Scalars["Float"]>;
  total_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "rotation_result" */
export type RotationResultVarianceOrderBy = {
  first_count?: Maybe<OrderBy>;
  out_count?: Maybe<OrderBy>;
  second_count?: Maybe<OrderBy>;
  third_count?: Maybe<OrderBy>;
  total_count?: Maybe<OrderBy>;
};

/** columns and relationships of "running_horses" */
export type RunningHorses = {
  __typename?: "running_horses";
  common_race_name: Scalars["String"];
  horse_name: Scalars["String"];
  horse_num: Scalars["Int"];
  new_total_index: Scalars["Int"];
  popularity: Scalars["Int"];
  race_key: Scalars["String"];
};

/** aggregated selection of "running_horses" */
export type RunningHorsesAggregate = {
  __typename?: "running_horses_aggregate";
  aggregate?: Maybe<RunningHorsesAggregateFields>;
  nodes: Array<RunningHorses>;
};

/** aggregate fields of "running_horses" */
export type RunningHorsesAggregateFields = {
  __typename?: "running_horses_aggregate_fields";
  avg?: Maybe<RunningHorsesAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RunningHorsesMaxFields>;
  min?: Maybe<RunningHorsesMinFields>;
  stddev?: Maybe<RunningHorsesStddevFields>;
  stddev_pop?: Maybe<RunningHorsesStddevPopFields>;
  stddev_samp?: Maybe<RunningHorsesStddevSampFields>;
  sum?: Maybe<RunningHorsesSumFields>;
  var_pop?: Maybe<RunningHorsesVarPopFields>;
  var_samp?: Maybe<RunningHorsesVarSampFields>;
  variance?: Maybe<RunningHorsesVarianceFields>;
};

/** aggregate fields of "running_horses" */
export type RunningHorsesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RunningHorsesSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "running_horses" */
export type RunningHorsesAggregateOrderBy = {
  avg?: Maybe<RunningHorsesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RunningHorsesMaxOrderBy>;
  min?: Maybe<RunningHorsesMinOrderBy>;
  stddev?: Maybe<RunningHorsesStddevOrderBy>;
  stddev_pop?: Maybe<RunningHorsesStddevPopOrderBy>;
  stddev_samp?: Maybe<RunningHorsesStddevSampOrderBy>;
  sum?: Maybe<RunningHorsesSumOrderBy>;
  var_pop?: Maybe<RunningHorsesVarPopOrderBy>;
  var_samp?: Maybe<RunningHorsesVarSampOrderBy>;
  variance?: Maybe<RunningHorsesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "running_horses" */
export type RunningHorsesArrRelInsertInput = {
  data: Array<RunningHorsesInsertInput>;
  on_conflict?: Maybe<RunningHorsesOnConflict>;
};

/** aggregate avg on columns */
export type RunningHorsesAvgFields = {
  __typename?: "running_horses_avg_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "running_horses" */
export type RunningHorsesAvgOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "running_horses". All fields are combined with a logical 'AND'. */
export type RunningHorsesBoolExp = {
  _and?: Maybe<Array<Maybe<RunningHorsesBoolExp>>>;
  _not?: Maybe<RunningHorsesBoolExp>;
  _or?: Maybe<Array<Maybe<RunningHorsesBoolExp>>>;
  common_race_name?: Maybe<StringComparisonExp>;
  horse_name?: Maybe<StringComparisonExp>;
  horse_num?: Maybe<IntComparisonExp>;
  new_total_index?: Maybe<IntComparisonExp>;
  popularity?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "running_horses" */
export enum RunningHorsesConstraint {
  /** unique or primary key constraint */
  RUNNING_HORSES_PKEY = "running_horses_pkey",
}

/** input type for incrementing integer column in table "running_horses" */
export type RunningHorsesIncInput = {
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "running_horses" */
export type RunningHorsesInsertInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type RunningHorsesMaxFields = {
  __typename?: "running_horses_max_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "running_horses" */
export type RunningHorsesMaxOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RunningHorsesMinFields = {
  __typename?: "running_horses_min_fields";
  common_race_name?: Maybe<Scalars["String"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "running_horses" */
export type RunningHorsesMinOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
};

/** response of any mutation on the table "running_horses" */
export type RunningHorsesMutationResponse = {
  __typename?: "running_horses_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<RunningHorses>;
};

/** input type for inserting object relation for remote table "running_horses" */
export type RunningHorsesObjRelInsertInput = {
  data: RunningHorsesInsertInput;
  on_conflict?: Maybe<RunningHorsesOnConflict>;
};

/** on conflict condition type for table "running_horses" */
export type RunningHorsesOnConflict = {
  constraint: RunningHorsesConstraint;
  update_columns: Array<RunningHorsesUpdateColumn>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** ordering options when selecting data from "running_horses" */
export type RunningHorsesOrderBy = {
  common_race_name?: Maybe<OrderBy>;
  horse_name?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
};

/** primary key columns input for table: "running_horses" */
export type RunningHorsesPkColumnsInput = {
  race_key: Scalars["String"];
};

/** select columns of table "running_horses" */
export enum RunningHorsesSelectColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  NEW_TOTAL_INDEX = "new_total_index",
  /** column name */
  POPULARITY = "popularity",
  /** column name */
  RACE_KEY = "race_key",
}

/** input type for updating data in table "running_horses" */
export type RunningHorsesSetInput = {
  common_race_name?: Maybe<Scalars["String"]>;
  horse_name?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type RunningHorsesStddevFields = {
  __typename?: "running_horses_stddev_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "running_horses" */
export type RunningHorsesStddevOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RunningHorsesStddevPopFields = {
  __typename?: "running_horses_stddev_pop_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "running_horses" */
export type RunningHorsesStddevPopOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RunningHorsesStddevSampFields = {
  __typename?: "running_horses_stddev_samp_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "running_horses" */
export type RunningHorsesStddevSampOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RunningHorsesSumFields = {
  __typename?: "running_horses_sum_fields";
  horse_num?: Maybe<Scalars["Int"]>;
  new_total_index?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "running_horses" */
export type RunningHorsesSumOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** update columns of table "running_horses" */
export enum RunningHorsesUpdateColumn {
  /** column name */
  COMMON_RACE_NAME = "common_race_name",
  /** column name */
  HORSE_NAME = "horse_name",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  NEW_TOTAL_INDEX = "new_total_index",
  /** column name */
  POPULARITY = "popularity",
  /** column name */
  RACE_KEY = "race_key",
}

/** aggregate var_pop on columns */
export type RunningHorsesVarPopFields = {
  __typename?: "running_horses_var_pop_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "running_horses" */
export type RunningHorsesVarPopOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RunningHorsesVarSampFields = {
  __typename?: "running_horses_var_samp_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "running_horses" */
export type RunningHorsesVarSampOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RunningHorsesVarianceFields = {
  __typename?: "running_horses_variance_fields";
  horse_num?: Maybe<Scalars["Float"]>;
  new_total_index?: Maybe<Scalars["Float"]>;
  popularity?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "running_horses" */
export type RunningHorsesVarianceOrderBy = {
  horse_num?: Maybe<OrderBy>;
  new_total_index?: Maybe<OrderBy>;
  popularity?: Maybe<OrderBy>;
};

export type SearchRaceHorseNumCountArgs = {
  argname?: Maybe<Scalars["String"]>;
};

export type SearchRotationCountArgs = {
  argname?: Maybe<Scalars["String"]>;
};

export type SearchRunningHorsesArgs = {
  argday?: Maybe<Scalars["String"]>;
  argname?: Maybe<Scalars["String"]>;
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "baba_result_summary_mart" */
  baba_result_summary_mart: Array<BabaResultSummaryMart>;
  /** fetch aggregated fields from the table: "baba_result_summary_mart" */
  baba_result_summary_mart_aggregate: BabaResultSummaryMartAggregate;
  /** fetch data from the table: "babas" */
  babas: Array<Babas>;
  /** fetch aggregated fields from the table: "babas" */
  babas_aggregate: BabasAggregate;
  /** fetch data from the table: "babas" using primary key columns */
  babas_by_pk?: Maybe<Babas>;
  /** fetch data from the table: "blogs" using primary key columns */
  blog?: Maybe<Blogs>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogsAggregate: BlogsAggregate;
  /** fetch data from the table: "course_result_summary_mart" */
  course_result_summary_mart: Array<CourseResultSummaryMart>;
  /** fetch aggregated fields from the table: "course_result_summary_mart" */
  course_result_summary_mart_aggregate: CourseResultSummaryMartAggregate;
  /** fetch data from the table: "distance_result_summary_mart" */
  distance_result_summary_mart: Array<DistanceResultSummaryMart>;
  /** fetch aggregated fields from the table: "distance_result_summary_mart" */
  distance_result_summary_mart_aggregate: DistanceResultSummaryMartAggregate;
  /** fetch data from the table: "holdings" */
  holdings: Array<Holdings>;
  /** fetch aggregated fields from the table: "holdings" */
  holdings_aggregate: HoldingsAggregate;
  /** fetch data from the table: "holdings" using primary key columns */
  holdings_by_pk?: Maybe<Holdings>;
  /** fetch data from the table: "horse_num_count" */
  horse_num_count: Array<HorseNumCount>;
  /** fetch aggregated fields from the table: "horse_num_count" */
  horse_num_count_aggregate: HorseNumCountAggregate;
  /** fetch data from the table: "horse_num_count" using primary key columns */
  horse_num_count_by_pk?: Maybe<HorseNumCount>;
  /** fetch data from the table: "horses" */
  horses: Array<Horses>;
  /** fetch aggregated fields from the table: "horses" */
  horses_aggregate: HorsesAggregate;
  /** fetch data from the table: "horses" using primary key columns */
  horses_by_pk?: Maybe<Horses>;
  /** fetch data from the table: "jockeys" */
  jockeys: Array<Jockeys>;
  /** fetch aggregated fields from the table: "jockeys" */
  jockeys_aggregate: JockeysAggregate;
  /** fetch data from the table: "jockeys" using primary key columns */
  jockeys_by_pk?: Maybe<Jockeys>;
  /** fetch data from the table: "legqualities" */
  legqualities: Array<Legqualities>;
  /** fetch aggregated fields from the table: "legqualities" */
  legqualities_aggregate: LegqualitiesAggregate;
  /** fetch data from the table: "legqualities" using primary key columns */
  legqualities_by_pk?: Maybe<Legqualities>;
  /** fetch data from the table: "lineages" */
  lineages: Array<Lineages>;
  /** fetch aggregated fields from the table: "lineages" */
  lineages_aggregate: LineagesAggregate;
  /** fetch data from the table: "lineages" using primary key columns */
  lineages_by_pk?: Maybe<Lineages>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: PlacesAggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table: "race_result_mart" */
  race_result_mart: Array<RaceResultMart>;
  /** fetch aggregated fields from the table: "race_result_mart" */
  race_result_mart_aggregate: RaceResultMartAggregate;
  /** fetch data from the table: "races" */
  races: Array<Races>;
  /** fetch aggregated fields from the table: "races" */
  races_aggregate: RacesAggregate;
  /** fetch data from the table: "races" using primary key columns */
  races_by_pk?: Maybe<Races>;
  /** fetch data from the table: "realtimehorses" */
  realtimehorses: Array<Realtimehorses>;
  /** fetch aggregated fields from the table: "realtimehorses" */
  realtimehorses_aggregate: RealtimehorsesAggregate;
  /** fetch data from the table: "realtimehorses" using primary key columns */
  realtimehorses_by_pk?: Maybe<Realtimehorses>;
  /** fetch data from the table: "refunds" */
  refunds: Array<Refunds>;
  /** fetch aggregated fields from the table: "refunds" */
  refunds_aggregate: RefundsAggregate;
  /** fetch data from the table: "refunds" using primary key columns */
  refunds_by_pk?: Maybe<Refunds>;
  /** fetch data from the table: "results" */
  results: Array<Results>;
  /** fetch aggregated fields from the table: "results" */
  results_aggregate: ResultsAggregate;
  /** fetch data from the table: "results" using primary key columns */
  results_by_pk?: Maybe<Results>;
  /** fetch data from the table: "rotation_result" */
  rotation_result: Array<RotationResult>;
  /** fetch aggregated fields from the table: "rotation_result" */
  rotation_result_aggregate: RotationResultAggregate;
  /** fetch data from the table: "rotation_result" using primary key columns */
  rotation_result_by_pk?: Maybe<RotationResult>;
  /** fetch data from the table: "running_horses" */
  running_horses: Array<RunningHorses>;
  /** fetch aggregated fields from the table: "running_horses" */
  running_horses_aggregate: RunningHorsesAggregate;
  /** fetch data from the table: "running_horses" using primary key columns */
  running_horses_by_pk?: Maybe<RunningHorses>;
  /** execute function "search_race_horse_num_count" which returns "horse_num_count" */
  search_race_horse_num_count: Array<HorseNumCount>;
  /** execute function "search_race_horse_num_count" and query aggregates on result of table type "horse_num_count" */
  search_race_horse_num_count_aggregate: HorseNumCountAggregate;
  /** execute function "search_rotation_count" which returns "rotation_result" */
  search_rotation_count: Array<RotationResult>;
  /** execute function "search_rotation_count" and query aggregates on result of table type "rotation_result" */
  search_rotation_count_aggregate: RotationResultAggregate;
  /** execute function "search_running_horses" which returns "running_horses" */
  search_running_horses: Array<RunningHorses>;
  /** execute function "search_running_horses" and query aggregates on result of table type "running_horses" */
  search_running_horses_aggregate: RunningHorsesAggregate;
  /** fetch data from the table: "trainers" */
  trainers: Array<Trainers>;
  /** fetch aggregated fields from the table: "trainers" */
  trainers_aggregate: TrainersAggregate;
  /** fetch data from the table: "trainings" */
  trainings: Array<Trainings>;
  /** fetch aggregated fields from the table: "trainings" */
  trainings_aggregate: TrainingsAggregate;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
};

/** subscription root */
export type SubscriptionRootBabaResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<BabaResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabaResultSummaryMartOrderBy>>;
  where?: Maybe<BabaResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootBabaResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<BabaResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabaResultSummaryMartOrderBy>>;
  where?: Maybe<BabaResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootBabasArgs = {
  distinct_on?: Maybe<Array<BabasSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabasOrderBy>>;
  where?: Maybe<BabasBoolExp>;
};

/** subscription root */
export type SubscriptionRootBabasAggregateArgs = {
  distinct_on?: Maybe<Array<BabasSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BabasOrderBy>>;
  where?: Maybe<BabasBoolExp>;
};

/** subscription root */
export type SubscriptionRootBabasByPkArgs = {
  baba_id: Scalars["Int"];
};

/** subscription root */
export type SubscriptionRootBlogArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootBlogsArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};

/** subscription root */
export type SubscriptionRootBlogsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};

/** subscription root */
export type SubscriptionRootCourseResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<CourseResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CourseResultSummaryMartOrderBy>>;
  where?: Maybe<CourseResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootCourseResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<CourseResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CourseResultSummaryMartOrderBy>>;
  where?: Maybe<CourseResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootDistanceResultSummaryMartArgs = {
  distinct_on?: Maybe<Array<DistanceResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<DistanceResultSummaryMartOrderBy>>;
  where?: Maybe<DistanceResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootDistanceResultSummaryMartAggregateArgs = {
  distinct_on?: Maybe<Array<DistanceResultSummaryMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<DistanceResultSummaryMartOrderBy>>;
  where?: Maybe<DistanceResultSummaryMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootHoldingsArgs = {
  distinct_on?: Maybe<Array<HoldingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HoldingsOrderBy>>;
  where?: Maybe<HoldingsBoolExp>;
};

/** subscription root */
export type SubscriptionRootHoldingsAggregateArgs = {
  distinct_on?: Maybe<Array<HoldingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HoldingsOrderBy>>;
  where?: Maybe<HoldingsBoolExp>;
};

/** subscription root */
export type SubscriptionRootHoldingsByPkArgs = {
  holding_key: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootHorseNumCountArgs = {
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** subscription root */
export type SubscriptionRootHorseNumCountAggregateArgs = {
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** subscription root */
export type SubscriptionRootHorseNumCountByPkArgs = {
  common_race_name: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootHorsesArgs = {
  distinct_on?: Maybe<Array<HorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorsesOrderBy>>;
  where?: Maybe<HorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootHorsesAggregateArgs = {
  distinct_on?: Maybe<Array<HorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorsesOrderBy>>;
  where?: Maybe<HorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootHorsesByPkArgs = {
  pedigree_register: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootJockeysArgs = {
  distinct_on?: Maybe<Array<JockeysSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<JockeysOrderBy>>;
  where?: Maybe<JockeysBoolExp>;
};

/** subscription root */
export type SubscriptionRootJockeysAggregateArgs = {
  distinct_on?: Maybe<Array<JockeysSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<JockeysOrderBy>>;
  where?: Maybe<JockeysBoolExp>;
};

/** subscription root */
export type SubscriptionRootJockeysByPkArgs = {
  jockey_code: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootLegqualitiesArgs = {
  distinct_on?: Maybe<Array<LegqualitiesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LegqualitiesOrderBy>>;
  where?: Maybe<LegqualitiesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLegqualitiesAggregateArgs = {
  distinct_on?: Maybe<Array<LegqualitiesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LegqualitiesOrderBy>>;
  where?: Maybe<LegqualitiesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLegqualitiesByPkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type SubscriptionRootLineagesArgs = {
  distinct_on?: Maybe<Array<LineagesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LineagesOrderBy>>;
  where?: Maybe<LineagesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLineagesAggregateArgs = {
  distinct_on?: Maybe<Array<LineagesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LineagesOrderBy>>;
  where?: Maybe<LineagesBoolExp>;
};

/** subscription root */
export type SubscriptionRootLineagesByPkArgs = {
  code: Scalars["Int"];
};

/** subscription root */
export type SubscriptionRootPlacesArgs = {
  distinct_on?: Maybe<Array<PlacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PlacesOrderBy>>;
  where?: Maybe<PlacesBoolExp>;
};

/** subscription root */
export type SubscriptionRootPlacesAggregateArgs = {
  distinct_on?: Maybe<Array<PlacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PlacesOrderBy>>;
  where?: Maybe<PlacesBoolExp>;
};

/** subscription root */
export type SubscriptionRootPlacesByPkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type SubscriptionRootRaceResultMartArgs = {
  distinct_on?: Maybe<Array<RaceResultMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RaceResultMartOrderBy>>;
  where?: Maybe<RaceResultMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootRaceResultMartAggregateArgs = {
  distinct_on?: Maybe<Array<RaceResultMartSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RaceResultMartOrderBy>>;
  where?: Maybe<RaceResultMartBoolExp>;
};

/** subscription root */
export type SubscriptionRootRacesArgs = {
  distinct_on?: Maybe<Array<RacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RacesOrderBy>>;
  where?: Maybe<RacesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRacesAggregateArgs = {
  distinct_on?: Maybe<Array<RacesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RacesOrderBy>>;
  where?: Maybe<RacesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRacesByPkArgs = {
  race_key: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootRealtimehorsesArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRealtimehorsesAggregateArgs = {
  distinct_on?: Maybe<Array<RealtimehorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RealtimehorsesOrderBy>>;
  where?: Maybe<RealtimehorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRealtimehorsesByPkArgs = {
  realtimehorse_id: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootRefundsArgs = {
  distinct_on?: Maybe<Array<RefundsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RefundsOrderBy>>;
  where?: Maybe<RefundsBoolExp>;
};

/** subscription root */
export type SubscriptionRootRefundsAggregateArgs = {
  distinct_on?: Maybe<Array<RefundsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RefundsOrderBy>>;
  where?: Maybe<RefundsBoolExp>;
};

/** subscription root */
export type SubscriptionRootRefundsByPkArgs = {
  race_key: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootResultsArgs = {
  distinct_on?: Maybe<Array<ResultsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ResultsOrderBy>>;
  where?: Maybe<ResultsBoolExp>;
};

/** subscription root */
export type SubscriptionRootResultsAggregateArgs = {
  distinct_on?: Maybe<Array<ResultsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ResultsOrderBy>>;
  where?: Maybe<ResultsBoolExp>;
};

/** subscription root */
export type SubscriptionRootResultsByPkArgs = {
  result_id: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootRotationResultArgs = {
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** subscription root */
export type SubscriptionRootRotationResultAggregateArgs = {
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** subscription root */
export type SubscriptionRootRotationResultByPkArgs = {
  common_race_name: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootRunningHorsesArgs = {
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRunningHorsesAggregateArgs = {
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootRunningHorsesByPkArgs = {
  race_key: Scalars["String"];
};

/** subscription root */
export type SubscriptionRootSearchRaceHorseNumCountArgs = {
  args: SearchRaceHorseNumCountArgs;
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** subscription root */
export type SubscriptionRootSearchRaceHorseNumCountAggregateArgs = {
  args: SearchRaceHorseNumCountArgs;
  distinct_on?: Maybe<Array<HorseNumCountSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<HorseNumCountOrderBy>>;
  where?: Maybe<HorseNumCountBoolExp>;
};

/** subscription root */
export type SubscriptionRootSearchRotationCountArgs = {
  args: SearchRotationCountArgs;
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** subscription root */
export type SubscriptionRootSearchRotationCountAggregateArgs = {
  args: SearchRotationCountArgs;
  distinct_on?: Maybe<Array<RotationResultSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RotationResultOrderBy>>;
  where?: Maybe<RotationResultBoolExp>;
};

/** subscription root */
export type SubscriptionRootSearchRunningHorsesArgs = {
  args: SearchRunningHorsesArgs;
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootSearchRunningHorsesAggregateArgs = {
  args: SearchRunningHorsesArgs;
  distinct_on?: Maybe<Array<RunningHorsesSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RunningHorsesOrderBy>>;
  where?: Maybe<RunningHorsesBoolExp>;
};

/** subscription root */
export type SubscriptionRootTrainersArgs = {
  distinct_on?: Maybe<Array<TrainersSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainersOrderBy>>;
  where?: Maybe<TrainersBoolExp>;
};

/** subscription root */
export type SubscriptionRootTrainersAggregateArgs = {
  distinct_on?: Maybe<Array<TrainersSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainersOrderBy>>;
  where?: Maybe<TrainersBoolExp>;
};

/** subscription root */
export type SubscriptionRootTrainingsArgs = {
  distinct_on?: Maybe<Array<TrainingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainingsOrderBy>>;
  where?: Maybe<TrainingsBoolExp>;
};

/** subscription root */
export type SubscriptionRootTrainingsAggregateArgs = {
  distinct_on?: Maybe<Array<TrainingsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TrainingsOrderBy>>;
  where?: Maybe<TrainingsBoolExp>;
};

/** subscription root */
export type SubscriptionRootTrainingsByPkArgs = {
  training_id: Scalars["String"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "trainers" */
export type Trainers = {
  __typename?: "trainers";
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  trainer_aka?: Maybe<Scalars["String"]>;
  trainer_code?: Maybe<Scalars["String"]>;
  trainer_comment?: Maybe<Scalars["String"]>;
  trainer_kana?: Maybe<Scalars["String"]>;
  trainer_name?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "trainers" */
export type TrainersAggregate = {
  __typename?: "trainers_aggregate";
  aggregate?: Maybe<TrainersAggregateFields>;
  nodes: Array<Trainers>;
};

/** aggregate fields of "trainers" */
export type TrainersAggregateFields = {
  __typename?: "trainers_aggregate_fields";
  avg?: Maybe<TrainersAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TrainersMaxFields>;
  min?: Maybe<TrainersMinFields>;
  stddev?: Maybe<TrainersStddevFields>;
  stddev_pop?: Maybe<TrainersStddevPopFields>;
  stddev_samp?: Maybe<TrainersStddevSampFields>;
  sum?: Maybe<TrainersSumFields>;
  var_pop?: Maybe<TrainersVarPopFields>;
  var_samp?: Maybe<TrainersVarSampFields>;
  variance?: Maybe<TrainersVarianceFields>;
};

/** aggregate fields of "trainers" */
export type TrainersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TrainersSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "trainers" */
export type TrainersAggregateOrderBy = {
  avg?: Maybe<TrainersAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TrainersMaxOrderBy>;
  min?: Maybe<TrainersMinOrderBy>;
  stddev?: Maybe<TrainersStddevOrderBy>;
  stddev_pop?: Maybe<TrainersStddevPopOrderBy>;
  stddev_samp?: Maybe<TrainersStddevSampOrderBy>;
  sum?: Maybe<TrainersSumOrderBy>;
  var_pop?: Maybe<TrainersVarPopOrderBy>;
  var_samp?: Maybe<TrainersVarSampOrderBy>;
  variance?: Maybe<TrainersVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "trainers" */
export type TrainersArrRelInsertInput = {
  data: Array<TrainersInsertInput>;
  on_conflict?: Maybe<TrainersOnConflict>;
};

/** aggregate avg on columns */
export type TrainersAvgFields = {
  __typename?: "trainers_avg_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "trainers" */
export type TrainersAvgOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "trainers". All fields are combined with a logical 'AND'. */
export type TrainersBoolExp = {
  _and?: Maybe<Array<Maybe<TrainersBoolExp>>>;
  _not?: Maybe<TrainersBoolExp>;
  _or?: Maybe<Array<Maybe<TrainersBoolExp>>>;
  belong_code?: Maybe<IntComparisonExp>;
  belong_region_name?: Maybe<StringComparisonExp>;
  birthday?: Maybe<StringComparisonExp>;
  data_date?: Maybe<StringComparisonExp>;
  insert_comment_date?: Maybe<StringComparisonExp>;
  license_year?: Maybe<IntComparisonExp>;
  reading_last_year?: Maybe<IntComparisonExp>;
  reading_this_year?: Maybe<IntComparisonExp>;
  register_delete_date?: Maybe<StringComparisonExp>;
  register_delete_flag?: Maybe<IntComparisonExp>;
  result_failure_last_year?: Maybe<StringComparisonExp>;
  result_failure_this_year?: Maybe<StringComparisonExp>;
  result_failure_total?: Maybe<StringComparisonExp>;
  result_flat_last_year?: Maybe<StringComparisonExp>;
  result_flat_this_year?: Maybe<StringComparisonExp>;
  result_flat_total?: Maybe<StringComparisonExp>;
  trainer_aka?: Maybe<StringComparisonExp>;
  trainer_code?: Maybe<StringComparisonExp>;
  trainer_comment?: Maybe<StringComparisonExp>;
  trainer_kana?: Maybe<StringComparisonExp>;
  trainer_name?: Maybe<StringComparisonExp>;
  winnum_heavy_award_last_year?: Maybe<IntComparisonExp>;
  winnum_heavy_award_this_year?: Maybe<IntComparisonExp>;
  winnum_special_last_year?: Maybe<IntComparisonExp>;
  winnum_special_this_year?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "trainers" */
export enum TrainersConstraint {
  /** unique or primary key constraint */
  TRAINERS_TRAINER_CODE_KEY = "trainers_trainer_code_key",
}

/** input type for incrementing integer column in table "trainers" */
export type TrainersIncInput = {
  belong_code?: Maybe<Scalars["Int"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "trainers" */
export type TrainersInsertInput = {
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  trainer_aka?: Maybe<Scalars["String"]>;
  trainer_code?: Maybe<Scalars["String"]>;
  trainer_comment?: Maybe<Scalars["String"]>;
  trainer_kana?: Maybe<Scalars["String"]>;
  trainer_name?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type TrainersMaxFields = {
  __typename?: "trainers_max_fields";
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  trainer_aka?: Maybe<Scalars["String"]>;
  trainer_code?: Maybe<Scalars["String"]>;
  trainer_comment?: Maybe<Scalars["String"]>;
  trainer_kana?: Maybe<Scalars["String"]>;
  trainer_name?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "trainers" */
export type TrainersMaxOrderBy = {
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  trainer_aka?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  trainer_comment?: Maybe<OrderBy>;
  trainer_kana?: Maybe<OrderBy>;
  trainer_name?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TrainersMinFields = {
  __typename?: "trainers_min_fields";
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  trainer_aka?: Maybe<Scalars["String"]>;
  trainer_code?: Maybe<Scalars["String"]>;
  trainer_comment?: Maybe<Scalars["String"]>;
  trainer_kana?: Maybe<Scalars["String"]>;
  trainer_name?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "trainers" */
export type TrainersMinOrderBy = {
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  trainer_aka?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  trainer_comment?: Maybe<OrderBy>;
  trainer_kana?: Maybe<OrderBy>;
  trainer_name?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** response of any mutation on the table "trainers" */
export type TrainersMutationResponse = {
  __typename?: "trainers_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Trainers>;
};

/** input type for inserting object relation for remote table "trainers" */
export type TrainersObjRelInsertInput = {
  data: TrainersInsertInput;
  on_conflict?: Maybe<TrainersOnConflict>;
};

/** on conflict condition type for table "trainers" */
export type TrainersOnConflict = {
  constraint: TrainersConstraint;
  update_columns: Array<TrainersUpdateColumn>;
  where?: Maybe<TrainersBoolExp>;
};

/** ordering options when selecting data from "trainers" */
export type TrainersOrderBy = {
  belong_code?: Maybe<OrderBy>;
  belong_region_name?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  data_date?: Maybe<OrderBy>;
  insert_comment_date?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_date?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  result_failure_last_year?: Maybe<OrderBy>;
  result_failure_this_year?: Maybe<OrderBy>;
  result_failure_total?: Maybe<OrderBy>;
  result_flat_last_year?: Maybe<OrderBy>;
  result_flat_this_year?: Maybe<OrderBy>;
  result_flat_total?: Maybe<OrderBy>;
  trainer_aka?: Maybe<OrderBy>;
  trainer_code?: Maybe<OrderBy>;
  trainer_comment?: Maybe<OrderBy>;
  trainer_kana?: Maybe<OrderBy>;
  trainer_name?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** select columns of table "trainers" */
export enum TrainersSelectColumn {
  /** column name */
  BELONG_CODE = "belong_code",
  /** column name */
  BELONG_REGION_NAME = "belong_region_name",
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  INSERT_COMMENT_DATE = "insert_comment_date",
  /** column name */
  LICENSE_YEAR = "license_year",
  /** column name */
  READING_LAST_YEAR = "reading_last_year",
  /** column name */
  READING_THIS_YEAR = "reading_this_year",
  /** column name */
  REGISTER_DELETE_DATE = "register_delete_date",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  RESULT_FAILURE_LAST_YEAR = "result_failure_last_year",
  /** column name */
  RESULT_FAILURE_THIS_YEAR = "result_failure_this_year",
  /** column name */
  RESULT_FAILURE_TOTAL = "result_failure_total",
  /** column name */
  RESULT_FLAT_LAST_YEAR = "result_flat_last_year",
  /** column name */
  RESULT_FLAT_THIS_YEAR = "result_flat_this_year",
  /** column name */
  RESULT_FLAT_TOTAL = "result_flat_total",
  /** column name */
  TRAINER_AKA = "trainer_aka",
  /** column name */
  TRAINER_CODE = "trainer_code",
  /** column name */
  TRAINER_COMMENT = "trainer_comment",
  /** column name */
  TRAINER_KANA = "trainer_kana",
  /** column name */
  TRAINER_NAME = "trainer_name",
  /** column name */
  WINNUM_HEAVY_AWARD_LAST_YEAR = "winnum_heavy_award_last_year",
  /** column name */
  WINNUM_HEAVY_AWARD_THIS_YEAR = "winnum_heavy_award_this_year",
  /** column name */
  WINNUM_SPECIAL_LAST_YEAR = "winnum_special_last_year",
  /** column name */
  WINNUM_SPECIAL_THIS_YEAR = "winnum_special_this_year",
}

/** input type for updating data in table "trainers" */
export type TrainersSetInput = {
  belong_code?: Maybe<Scalars["Int"]>;
  belong_region_name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  data_date?: Maybe<Scalars["String"]>;
  insert_comment_date?: Maybe<Scalars["String"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_date?: Maybe<Scalars["String"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  result_failure_last_year?: Maybe<Scalars["String"]>;
  result_failure_this_year?: Maybe<Scalars["String"]>;
  result_failure_total?: Maybe<Scalars["String"]>;
  result_flat_last_year?: Maybe<Scalars["String"]>;
  result_flat_this_year?: Maybe<Scalars["String"]>;
  result_flat_total?: Maybe<Scalars["String"]>;
  trainer_aka?: Maybe<Scalars["String"]>;
  trainer_code?: Maybe<Scalars["String"]>;
  trainer_comment?: Maybe<Scalars["String"]>;
  trainer_kana?: Maybe<Scalars["String"]>;
  trainer_name?: Maybe<Scalars["String"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type TrainersStddevFields = {
  __typename?: "trainers_stddev_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "trainers" */
export type TrainersStddevOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TrainersStddevPopFields = {
  __typename?: "trainers_stddev_pop_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "trainers" */
export type TrainersStddevPopOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TrainersStddevSampFields = {
  __typename?: "trainers_stddev_samp_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "trainers" */
export type TrainersStddevSampOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TrainersSumFields = {
  __typename?: "trainers_sum_fields";
  belong_code?: Maybe<Scalars["Int"]>;
  license_year?: Maybe<Scalars["Int"]>;
  reading_last_year?: Maybe<Scalars["Int"]>;
  reading_this_year?: Maybe<Scalars["Int"]>;
  register_delete_flag?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Int"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Int"]>;
  winnum_special_last_year?: Maybe<Scalars["Int"]>;
  winnum_special_this_year?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "trainers" */
export type TrainersSumOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** update columns of table "trainers" */
export enum TrainersUpdateColumn {
  /** column name */
  BELONG_CODE = "belong_code",
  /** column name */
  BELONG_REGION_NAME = "belong_region_name",
  /** column name */
  BIRTHDAY = "birthday",
  /** column name */
  DATA_DATE = "data_date",
  /** column name */
  INSERT_COMMENT_DATE = "insert_comment_date",
  /** column name */
  LICENSE_YEAR = "license_year",
  /** column name */
  READING_LAST_YEAR = "reading_last_year",
  /** column name */
  READING_THIS_YEAR = "reading_this_year",
  /** column name */
  REGISTER_DELETE_DATE = "register_delete_date",
  /** column name */
  REGISTER_DELETE_FLAG = "register_delete_flag",
  /** column name */
  RESULT_FAILURE_LAST_YEAR = "result_failure_last_year",
  /** column name */
  RESULT_FAILURE_THIS_YEAR = "result_failure_this_year",
  /** column name */
  RESULT_FAILURE_TOTAL = "result_failure_total",
  /** column name */
  RESULT_FLAT_LAST_YEAR = "result_flat_last_year",
  /** column name */
  RESULT_FLAT_THIS_YEAR = "result_flat_this_year",
  /** column name */
  RESULT_FLAT_TOTAL = "result_flat_total",
  /** column name */
  TRAINER_AKA = "trainer_aka",
  /** column name */
  TRAINER_CODE = "trainer_code",
  /** column name */
  TRAINER_COMMENT = "trainer_comment",
  /** column name */
  TRAINER_KANA = "trainer_kana",
  /** column name */
  TRAINER_NAME = "trainer_name",
  /** column name */
  WINNUM_HEAVY_AWARD_LAST_YEAR = "winnum_heavy_award_last_year",
  /** column name */
  WINNUM_HEAVY_AWARD_THIS_YEAR = "winnum_heavy_award_this_year",
  /** column name */
  WINNUM_SPECIAL_LAST_YEAR = "winnum_special_last_year",
  /** column name */
  WINNUM_SPECIAL_THIS_YEAR = "winnum_special_this_year",
}

/** aggregate var_pop on columns */
export type TrainersVarPopFields = {
  __typename?: "trainers_var_pop_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "trainers" */
export type TrainersVarPopOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TrainersVarSampFields = {
  __typename?: "trainers_var_samp_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "trainers" */
export type TrainersVarSampOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TrainersVarianceFields = {
  __typename?: "trainers_variance_fields";
  belong_code?: Maybe<Scalars["Float"]>;
  license_year?: Maybe<Scalars["Float"]>;
  reading_last_year?: Maybe<Scalars["Float"]>;
  reading_this_year?: Maybe<Scalars["Float"]>;
  register_delete_flag?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_last_year?: Maybe<Scalars["Float"]>;
  winnum_heavy_award_this_year?: Maybe<Scalars["Float"]>;
  winnum_special_last_year?: Maybe<Scalars["Float"]>;
  winnum_special_this_year?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "trainers" */
export type TrainersVarianceOrderBy = {
  belong_code?: Maybe<OrderBy>;
  license_year?: Maybe<OrderBy>;
  reading_last_year?: Maybe<OrderBy>;
  reading_this_year?: Maybe<OrderBy>;
  register_delete_flag?: Maybe<OrderBy>;
  winnum_heavy_award_last_year?: Maybe<OrderBy>;
  winnum_heavy_award_this_year?: Maybe<OrderBy>;
  winnum_special_last_year?: Maybe<OrderBy>;
  winnum_special_this_year?: Maybe<OrderBy>;
};

/** columns and relationships of "trainings" */
export type Trainings = {
  __typename?: "trainings";
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  finishing_index_change?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  training_course_class?: Maybe<Scalars["String"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_evaluation?: Maybe<Scalars["String"]>;
  training_id: Scalars["String"];
  training_point?: Maybe<Scalars["Int"]>;
  training_type?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "trainings" */
export type TrainingsAggregate = {
  __typename?: "trainings_aggregate";
  aggregate?: Maybe<TrainingsAggregateFields>;
  nodes: Array<Trainings>;
};

/** aggregate fields of "trainings" */
export type TrainingsAggregateFields = {
  __typename?: "trainings_aggregate_fields";
  avg?: Maybe<TrainingsAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TrainingsMaxFields>;
  min?: Maybe<TrainingsMinFields>;
  stddev?: Maybe<TrainingsStddevFields>;
  stddev_pop?: Maybe<TrainingsStddevPopFields>;
  stddev_samp?: Maybe<TrainingsStddevSampFields>;
  sum?: Maybe<TrainingsSumFields>;
  var_pop?: Maybe<TrainingsVarPopFields>;
  var_samp?: Maybe<TrainingsVarSampFields>;
  variance?: Maybe<TrainingsVarianceFields>;
};

/** aggregate fields of "trainings" */
export type TrainingsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TrainingsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "trainings" */
export type TrainingsAggregateOrderBy = {
  avg?: Maybe<TrainingsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TrainingsMaxOrderBy>;
  min?: Maybe<TrainingsMinOrderBy>;
  stddev?: Maybe<TrainingsStddevOrderBy>;
  stddev_pop?: Maybe<TrainingsStddevPopOrderBy>;
  stddev_samp?: Maybe<TrainingsStddevSampOrderBy>;
  sum?: Maybe<TrainingsSumOrderBy>;
  var_pop?: Maybe<TrainingsVarPopOrderBy>;
  var_samp?: Maybe<TrainingsVarSampOrderBy>;
  variance?: Maybe<TrainingsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "trainings" */
export type TrainingsArrRelInsertInput = {
  data: Array<TrainingsInsertInput>;
  on_conflict?: Maybe<TrainingsOnConflict>;
};

/** aggregate avg on columns */
export type TrainingsAvgFields = {
  __typename?: "trainings_avg_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "trainings" */
export type TrainingsAvgOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "trainings". All fields are combined with a logical 'AND'. */
export type TrainingsBoolExp = {
  _and?: Maybe<Array<Maybe<TrainingsBoolExp>>>;
  _not?: Maybe<TrainingsBoolExp>;
  _or?: Maybe<Array<Maybe<TrainingsBoolExp>>>;
  exterior_index?: Maybe<IntComparisonExp>;
  finishing_index?: Maybe<IntComparisonExp>;
  finishing_index_change?: Maybe<StringComparisonExp>;
  horse_num?: Maybe<IntComparisonExp>;
  race_key?: Maybe<StringComparisonExp>;
  training_course_class?: Maybe<StringComparisonExp>;
  training_course_type_dart?: Maybe<IntComparisonExp>;
  training_course_type_failure?: Maybe<IntComparisonExp>;
  training_course_type_poli?: Maybe<IntComparisonExp>;
  training_course_type_pool?: Maybe<IntComparisonExp>;
  training_course_type_slope?: Maybe<IntComparisonExp>;
  training_course_type_turf?: Maybe<IntComparisonExp>;
  training_course_type_wood?: Maybe<IntComparisonExp>;
  training_distance?: Maybe<IntComparisonExp>;
  training_evaluation?: Maybe<StringComparisonExp>;
  training_id?: Maybe<StringComparisonExp>;
  training_point?: Maybe<IntComparisonExp>;
  training_type?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "trainings" */
export enum TrainingsConstraint {
  /** unique or primary key constraint */
  TRAININGS_PKEY = "trainings_pkey",
}

/** input type for incrementing integer column in table "trainings" */
export type TrainingsIncInput = {
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_point?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "trainings" */
export type TrainingsInsertInput = {
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  finishing_index_change?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  training_course_class?: Maybe<Scalars["String"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_evaluation?: Maybe<Scalars["String"]>;
  training_id?: Maybe<Scalars["String"]>;
  training_point?: Maybe<Scalars["Int"]>;
  training_type?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type TrainingsMaxFields = {
  __typename?: "trainings_max_fields";
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  finishing_index_change?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  training_course_class?: Maybe<Scalars["String"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_evaluation?: Maybe<Scalars["String"]>;
  training_id?: Maybe<Scalars["String"]>;
  training_point?: Maybe<Scalars["Int"]>;
  training_type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "trainings" */
export type TrainingsMaxOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  finishing_index_change?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  training_course_class?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_evaluation?: Maybe<OrderBy>;
  training_id?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
  training_type?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TrainingsMinFields = {
  __typename?: "trainings_min_fields";
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  finishing_index_change?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  training_course_class?: Maybe<Scalars["String"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_evaluation?: Maybe<Scalars["String"]>;
  training_id?: Maybe<Scalars["String"]>;
  training_point?: Maybe<Scalars["Int"]>;
  training_type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "trainings" */
export type TrainingsMinOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  finishing_index_change?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  training_course_class?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_evaluation?: Maybe<OrderBy>;
  training_id?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
  training_type?: Maybe<OrderBy>;
};

/** response of any mutation on the table "trainings" */
export type TrainingsMutationResponse = {
  __typename?: "trainings_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Trainings>;
};

/** input type for inserting object relation for remote table "trainings" */
export type TrainingsObjRelInsertInput = {
  data: TrainingsInsertInput;
  on_conflict?: Maybe<TrainingsOnConflict>;
};

/** on conflict condition type for table "trainings" */
export type TrainingsOnConflict = {
  constraint: TrainingsConstraint;
  update_columns: Array<TrainingsUpdateColumn>;
  where?: Maybe<TrainingsBoolExp>;
};

/** ordering options when selecting data from "trainings" */
export type TrainingsOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  finishing_index_change?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  race_key?: Maybe<OrderBy>;
  training_course_class?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_evaluation?: Maybe<OrderBy>;
  training_id?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
  training_type?: Maybe<OrderBy>;
};

/** primary key columns input for table: "trainings" */
export type TrainingsPkColumnsInput = {
  training_id: Scalars["String"];
};

/** select columns of table "trainings" */
export enum TrainingsSelectColumn {
  /** column name */
  EXTERIOR_INDEX = "exterior_index",
  /** column name */
  FINISHING_INDEX = "finishing_index",
  /** column name */
  FINISHING_INDEX_CHANGE = "finishing_index_change",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  TRAINING_COURSE_CLASS = "training_course_class",
  /** column name */
  TRAINING_COURSE_TYPE_DART = "training_course_type_dart",
  /** column name */
  TRAINING_COURSE_TYPE_FAILURE = "training_course_type_failure",
  /** column name */
  TRAINING_COURSE_TYPE_POLI = "training_course_type_poli",
  /** column name */
  TRAINING_COURSE_TYPE_POOL = "training_course_type_pool",
  /** column name */
  TRAINING_COURSE_TYPE_SLOPE = "training_course_type_slope",
  /** column name */
  TRAINING_COURSE_TYPE_TURF = "training_course_type_turf",
  /** column name */
  TRAINING_COURSE_TYPE_WOOD = "training_course_type_wood",
  /** column name */
  TRAINING_DISTANCE = "training_distance",
  /** column name */
  TRAINING_EVALUATION = "training_evaluation",
  /** column name */
  TRAINING_ID = "training_id",
  /** column name */
  TRAINING_POINT = "training_point",
  /** column name */
  TRAINING_TYPE = "training_type",
}

/** input type for updating data in table "trainings" */
export type TrainingsSetInput = {
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  finishing_index_change?: Maybe<Scalars["String"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  race_key?: Maybe<Scalars["String"]>;
  training_course_class?: Maybe<Scalars["String"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_evaluation?: Maybe<Scalars["String"]>;
  training_id?: Maybe<Scalars["String"]>;
  training_point?: Maybe<Scalars["Int"]>;
  training_type?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type TrainingsStddevFields = {
  __typename?: "trainings_stddev_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "trainings" */
export type TrainingsStddevOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TrainingsStddevPopFields = {
  __typename?: "trainings_stddev_pop_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "trainings" */
export type TrainingsStddevPopOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TrainingsStddevSampFields = {
  __typename?: "trainings_stddev_samp_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "trainings" */
export type TrainingsStddevSampOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TrainingsSumFields = {
  __typename?: "trainings_sum_fields";
  exterior_index?: Maybe<Scalars["Int"]>;
  finishing_index?: Maybe<Scalars["Int"]>;
  horse_num?: Maybe<Scalars["Int"]>;
  training_course_type_dart?: Maybe<Scalars["Int"]>;
  training_course_type_failure?: Maybe<Scalars["Int"]>;
  training_course_type_poli?: Maybe<Scalars["Int"]>;
  training_course_type_pool?: Maybe<Scalars["Int"]>;
  training_course_type_slope?: Maybe<Scalars["Int"]>;
  training_course_type_turf?: Maybe<Scalars["Int"]>;
  training_course_type_wood?: Maybe<Scalars["Int"]>;
  training_distance?: Maybe<Scalars["Int"]>;
  training_point?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "trainings" */
export type TrainingsSumOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** update columns of table "trainings" */
export enum TrainingsUpdateColumn {
  /** column name */
  EXTERIOR_INDEX = "exterior_index",
  /** column name */
  FINISHING_INDEX = "finishing_index",
  /** column name */
  FINISHING_INDEX_CHANGE = "finishing_index_change",
  /** column name */
  HORSE_NUM = "horse_num",
  /** column name */
  RACE_KEY = "race_key",
  /** column name */
  TRAINING_COURSE_CLASS = "training_course_class",
  /** column name */
  TRAINING_COURSE_TYPE_DART = "training_course_type_dart",
  /** column name */
  TRAINING_COURSE_TYPE_FAILURE = "training_course_type_failure",
  /** column name */
  TRAINING_COURSE_TYPE_POLI = "training_course_type_poli",
  /** column name */
  TRAINING_COURSE_TYPE_POOL = "training_course_type_pool",
  /** column name */
  TRAINING_COURSE_TYPE_SLOPE = "training_course_type_slope",
  /** column name */
  TRAINING_COURSE_TYPE_TURF = "training_course_type_turf",
  /** column name */
  TRAINING_COURSE_TYPE_WOOD = "training_course_type_wood",
  /** column name */
  TRAINING_DISTANCE = "training_distance",
  /** column name */
  TRAINING_EVALUATION = "training_evaluation",
  /** column name */
  TRAINING_ID = "training_id",
  /** column name */
  TRAINING_POINT = "training_point",
  /** column name */
  TRAINING_TYPE = "training_type",
}

/** aggregate var_pop on columns */
export type TrainingsVarPopFields = {
  __typename?: "trainings_var_pop_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "trainings" */
export type TrainingsVarPopOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TrainingsVarSampFields = {
  __typename?: "trainings_var_samp_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "trainings" */
export type TrainingsVarSampOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TrainingsVarianceFields = {
  __typename?: "trainings_variance_fields";
  exterior_index?: Maybe<Scalars["Float"]>;
  finishing_index?: Maybe<Scalars["Float"]>;
  horse_num?: Maybe<Scalars["Float"]>;
  training_course_type_dart?: Maybe<Scalars["Float"]>;
  training_course_type_failure?: Maybe<Scalars["Float"]>;
  training_course_type_poli?: Maybe<Scalars["Float"]>;
  training_course_type_pool?: Maybe<Scalars["Float"]>;
  training_course_type_slope?: Maybe<Scalars["Float"]>;
  training_course_type_turf?: Maybe<Scalars["Float"]>;
  training_course_type_wood?: Maybe<Scalars["Float"]>;
  training_distance?: Maybe<Scalars["Float"]>;
  training_point?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "trainings" */
export type TrainingsVarianceOrderBy = {
  exterior_index?: Maybe<OrderBy>;
  finishing_index?: Maybe<OrderBy>;
  horse_num?: Maybe<OrderBy>;
  training_course_type_dart?: Maybe<OrderBy>;
  training_course_type_failure?: Maybe<OrderBy>;
  training_course_type_poli?: Maybe<OrderBy>;
  training_course_type_pool?: Maybe<OrderBy>;
  training_course_type_slope?: Maybe<OrderBy>;
  training_course_type_turf?: Maybe<OrderBy>;
  training_course_type_wood?: Maybe<OrderBy>;
  training_distance?: Maybe<OrderBy>;
  training_point?: Maybe<OrderBy>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type GetBlogsQueryVariables = {};

export type GetBlogsQuery = { __typename?: "query_root" } & {
  blogs: Array<{ __typename?: "blogs" } & BlogFieldFragment>;
};

export type BlogFieldFragment = { __typename?: "blogs" } & Pick<
  Blogs,
  "author" | "id" | "image" | "summary" | "title" | "url" | "updatedAt"
>;

export type SearchHorseNumCountQueryVariables = {
  name: Scalars["String"];
};

export type SearchHorseNumCountQuery = { __typename?: "query_root" } & {
  searchRaceHorseNumCount: Array<
    { __typename?: "horse_num_count" } & {
      commonRaceName: HorseNumCount["common_race_name"];
      horseNum: HorseNumCount["horse_num"];
      firstCount: HorseNumCount["first_count"];
      secondCount: HorseNumCount["second_count"];
      thirdCount: HorseNumCount["third_count"];
      outCount: HorseNumCount["out_count"];
      totalCount: HorseNumCount["total_count"];
    }
  >;
};

export type GetWeekendRacesQueryVariables = {};

export type GetWeekendRacesQuery = { __typename?: "query_root" } & {
  races: Array<
    { __typename?: "races" } & {
      raceKey: Races["race_key"];
      raceName: Races["race_name"];
      raceNameCommon: Races["race_name_common"];
      raceGrade: Races["race_grade"];
      raceDay: Races["race_day"];
    }
  >;
};

export type SearchRotationCountQueryVariables = {
  name: Scalars["String"];
};

export type SearchRotationCountQuery = { __typename?: "query_root" } & {
  searchRotationCount: Array<
    { __typename?: "rotation_result" } & {
      commonRaceName: RotationResult["common_race_name"];
      lagCommonRaceName: RotationResult["lag_common_race_name"];
      firstCount: RotationResult["first_count"];
      secondCount: RotationResult["second_count"];
      thirdCount: RotationResult["third_count"];
      outCount: RotationResult["out_count"];
      totalCount: RotationResult["total_count"];
    }
  >;
};

export type SearchRunningHorsesQueryVariables = {
  day: Scalars["String"];
  name: Scalars["String"];
};

export type SearchRunningHorsesQuery = { __typename?: "query_root" } & {
  searchRunningHorses: Array<
    { __typename?: "running_horses" } & Pick<RunningHorses, "popularity"> & {
        horseName: RunningHorses["horse_name"];
        horseNum: RunningHorses["horse_num"];
        newTotalIndex: RunningHorses["new_total_index"];
        raceKey: RunningHorses["race_key"];
        commonRaceName: RunningHorses["common_race_name"];
      }
  >;
};

export const BlogFieldFragmentDoc = gql`
  fragment BlogField on blogs {
    author
    id
    image
    summary
    title
    url
    updatedAt
  }
`;
export const GetBlogsDocument = gql`
  query GetBlogs {
    blogs(order_by: { updatedAt: desc }) {
      ...BlogField
    }
  }
  ${BlogFieldFragmentDoc}
`;

/**
 * __useGetBlogsQuery__
 *
 * To run a query within a React component, call `useGetBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>
) {
  return ApolloReactHooks.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, baseOptions);
}
export function useGetBlogsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, baseOptions);
}
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<typeof useGetBlogsLazyQuery>;
export type GetBlogsQueryResult = ApolloReactCommon.QueryResult<GetBlogsQuery, GetBlogsQueryVariables>;
export const SearchHorseNumCountDocument = gql`
  query SearchHorseNumCount($name: String!) {
    searchRaceHorseNumCount: search_race_horse_num_count(args: { argname: $name }) {
      commonRaceName: common_race_name
      horseNum: horse_num
      firstCount: first_count
      secondCount: second_count
      thirdCount: third_count
      outCount: out_count
      totalCount: total_count
    }
  }
`;

/**
 * __useSearchHorseNumCountQuery__
 *
 * To run a query within a React component, call `useSearchHorseNumCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchHorseNumCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchHorseNumCountQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchHorseNumCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SearchHorseNumCountQuery, SearchHorseNumCountQueryVariables>
) {
  return ApolloReactHooks.useQuery<SearchHorseNumCountQuery, SearchHorseNumCountQueryVariables>(
    SearchHorseNumCountDocument,
    baseOptions
  );
}
export function useSearchHorseNumCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchHorseNumCountQuery, SearchHorseNumCountQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<SearchHorseNumCountQuery, SearchHorseNumCountQueryVariables>(
    SearchHorseNumCountDocument,
    baseOptions
  );
}
export type SearchHorseNumCountQueryHookResult = ReturnType<typeof useSearchHorseNumCountQuery>;
export type SearchHorseNumCountLazyQueryHookResult = ReturnType<typeof useSearchHorseNumCountLazyQuery>;
export type SearchHorseNumCountQueryResult = ApolloReactCommon.QueryResult<
  SearchHorseNumCountQuery,
  SearchHorseNumCountQueryVariables
>;
export const GetWeekendRacesDocument = gql`
  query GetWeekendRaces {
    races(
      where: { race_grade: { _gte: 1, _lte: 3 }, realtimehorses: { race_key: { _is_null: false } } }
      order_by: { race_day: desc, race_grade: asc }
      limit: 10
    ) {
      raceKey: race_key
      raceName: race_name
      raceNameCommon: race_name_common
      raceGrade: race_grade
      raceDay: race_day
      raceGrade: race_grade
    }
  }
`;

/**
 * __useGetWeekendRacesQuery__
 *
 * To run a query within a React component, call `useGetWeekendRacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeekendRacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeekendRacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWeekendRacesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetWeekendRacesQuery, GetWeekendRacesQueryVariables>
) {
  return ApolloReactHooks.useQuery<GetWeekendRacesQuery, GetWeekendRacesQueryVariables>(
    GetWeekendRacesDocument,
    baseOptions
  );
}
export function useGetWeekendRacesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWeekendRacesQuery, GetWeekendRacesQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<GetWeekendRacesQuery, GetWeekendRacesQueryVariables>(
    GetWeekendRacesDocument,
    baseOptions
  );
}
export type GetWeekendRacesQueryHookResult = ReturnType<typeof useGetWeekendRacesQuery>;
export type GetWeekendRacesLazyQueryHookResult = ReturnType<typeof useGetWeekendRacesLazyQuery>;
export type GetWeekendRacesQueryResult = ApolloReactCommon.QueryResult<
  GetWeekendRacesQuery,
  GetWeekendRacesQueryVariables
>;
export const SearchRotationCountDocument = gql`
  query SearchRotationCount($name: String!) {
    searchRotationCount: search_rotation_count(args: { argname: $name }) {
      commonRaceName: common_race_name
      lagCommonRaceName: lag_common_race_name
      firstCount: first_count
      secondCount: second_count
      thirdCount: third_count
      outCount: out_count
      totalCount: total_count
    }
  }
`;

/**
 * __useSearchRotationCountQuery__
 *
 * To run a query within a React component, call `useSearchRotationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRotationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRotationCountQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchRotationCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SearchRotationCountQuery, SearchRotationCountQueryVariables>
) {
  return ApolloReactHooks.useQuery<SearchRotationCountQuery, SearchRotationCountQueryVariables>(
    SearchRotationCountDocument,
    baseOptions
  );
}
export function useSearchRotationCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchRotationCountQuery, SearchRotationCountQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<SearchRotationCountQuery, SearchRotationCountQueryVariables>(
    SearchRotationCountDocument,
    baseOptions
  );
}
export type SearchRotationCountQueryHookResult = ReturnType<typeof useSearchRotationCountQuery>;
export type SearchRotationCountLazyQueryHookResult = ReturnType<typeof useSearchRotationCountLazyQuery>;
export type SearchRotationCountQueryResult = ApolloReactCommon.QueryResult<
  SearchRotationCountQuery,
  SearchRotationCountQueryVariables
>;
export const SearchRunningHorsesDocument = gql`
  query SearchRunningHorses($day: String!, $name: String!) {
    searchRunningHorses: search_running_horses(args: { argday: $day, argname: $name }, order_by: { horse_num: asc }) {
      horseName: horse_name
      horseNum: horse_num
      newTotalIndex: new_total_index
      popularity
      raceKey: race_key
      commonRaceName: common_race_name
    }
  }
`;

/**
 * __useSearchRunningHorsesQuery__
 *
 * To run a query within a React component, call `useSearchRunningHorsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRunningHorsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRunningHorsesQuery({
 *   variables: {
 *      day: // value for 'day'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchRunningHorsesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SearchRunningHorsesQuery, SearchRunningHorsesQueryVariables>
) {
  return ApolloReactHooks.useQuery<SearchRunningHorsesQuery, SearchRunningHorsesQueryVariables>(
    SearchRunningHorsesDocument,
    baseOptions
  );
}
export function useSearchRunningHorsesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchRunningHorsesQuery, SearchRunningHorsesQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<SearchRunningHorsesQuery, SearchRunningHorsesQueryVariables>(
    SearchRunningHorsesDocument,
    baseOptions
  );
}
export type SearchRunningHorsesQueryHookResult = ReturnType<typeof useSearchRunningHorsesQuery>;
export type SearchRunningHorsesLazyQueryHookResult = ReturnType<typeof useSearchRunningHorsesLazyQuery>;
export type SearchRunningHorsesQueryResult = ApolloReactCommon.QueryResult<
  SearchRunningHorsesQuery,
  SearchRunningHorsesQueryVariables
>;
