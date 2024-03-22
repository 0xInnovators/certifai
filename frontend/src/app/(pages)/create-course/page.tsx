"use client";
import Button from "@/app/components/Button";
import FormatService from "@/app/services/FormatService";
import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useWriteContract, useAccount } from "wagmi";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "@/app/blockchain";
import ShowError from "@/app/components/ShowError";
import ShowSuccess from "@/app/components/ShowSuccess";
import { useRouter } from "next/navigation";
import { ToastService } from "@/app/services/ToastService";
import SectionTitle from "@/app/components/SectionTitle";
import { FaSave } from "react-icons/fa";

function CreateCoursePage() {
  interface Lesson {
    lessonId: number;
    lessonName: string;
    lessonContent: string;
    mandatory: boolean;
    minimumPassingScore: number;
    lessonQuestion: string;
    lessonDocURI: string;
  }
  const { data: hash, writeContract, error } = useWriteContract();
  const router = useRouter();
  const { address } = useAccount();
  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImageURI, setCourseImageURI] = useState("https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmPnx58FXC7rpvVJNEAndQsbEnejKm4RSBuYG9yuSiN1e6");
  const [coursePrice, setCoursePrice] = useState("0");
  const [openAddLesson, setOpenAddLesson] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [lessonName, setLessonName] = useState("");
  const [lessonContent, setLessonContent] = useState("");
  const [lessonMandatory, setLessonMandatory] = useState(true);
  const [lessonMinimumPassingScore, setLessonMinimumPassingScore] = useState("60")
  const [lessonDocURI, setLessonDocURI] = useState("");
  const [lessonQuestion, setLessonQuestion] = useState("");

  function handleAddLesson() {
    if (lessonName.length < 4) {
      ToastService.notifyError("Digite um nome para o módulo");
      return;
    }

    if (lessonContent.length < 4) {
      ToastService.notifyError("Digite o conteúdo do módulo");
      return;
    }

    if (lessonDocURI.length < 4) {
      ToastService.notifyError("Informe o link do conteúdo");
      return;
    }
    const newLesson: Lesson = {
      lessonId: lessons.length,
      lessonName: lessonName,
      lessonContent: lessonContent,
      mandatory: lessonMandatory,
      minimumPassingScore: parseInt(lessonMinimumPassingScore),
      lessonQuestion: lessonQuestion,
      lessonDocURI: lessonDocURI,
    };
    const updatedLessons = [...lessons, newLesson];
    setLessons(updatedLessons);
    setOpenAddLesson(false);
    setLessonName("");
    setLessonContent("");
    setLessonQuestion("");
    setLessonDocURI("")
  }

  useEffect(() => {
    if (!address) router.push("/");
  }, [address, router]);

  function handleCancelAddLesson() {
    setOpenAddLesson(false);
    setLessonName("");
    setLessonContent("");
    setLessonQuestion("");
    setLessonDocURI("");
  }

  function handleSaveCourse() {
    if (courseName.length < 4) {
      ToastService.notifyError("Descreva melhor o nome do curso");
      return;
    }
    if (courseDescription.length < 4) {
      ToastService.notifyError("Descreva melhor a descrição do curso");
      return;
    }
    if (lessons.length === 0) {
      ToastService.notifyError("Cadastre pelo menos um módulo");
      return;
    }
    writeContract({
      address: AcademicManagerSmartContractAddress as `0x${string}`,
      abi: AcademicManagerSmartContractABI,
      functionName: "createCourse",
      args: [courseName, courseDescription, courseImageURI, coursePrice, lessons],
    });
  }

  useEffect(() => {
    setCourseName("");
    setCourseDescription("");
    setCourseImageURI("");
    setCoursePrice("0");
    setLessons([]);
  }, [hash]);

  function handleRemoveLesson(i: number) {
    const updatedLessons = lessons.filter((_, index) => index !== i);
    setLessons(updatedLessons);
  }

  function renderHeader(): JSX.Element {
    return (
      <tr className="text-white text-sm font-extrabold">
        {/* <th className="text-center p-3">Id</th> */}
        <th className="text-center p-3">Módulo</th>
        <th className="hidden md:table-cell text-center p-3">Obrigatório</th>
        <th className="text-center p-3">Nota mín.</th>
        <th className="text-center p-3">Ações</th>
      </tr>
    );
  }

  function renderData(): JSX.Element[] {
    return lessons?.map((lesson, i) => {
      return (
        <tr
          key={lesson.lessonId}
          className={`text-sm font-extrabold text-gray-500 bg-white ${
            i === 0 ? "" : "border-t-2 border-gray-200"
          }`}
        >
          {/* <td className="text-center p-3">{lesson.lessonId}</td> */}
          <td className="text-center p-3">{lesson.lessonName}</td>
          <td className="hidden md:table-cell text-center p-3">
            {lesson.mandatory ? "Sim" : "Não"}
          </td>
          <td className="text-center p-3">
            {FormatService.formatScore(lesson.minimumPassingScore)}
          </td>
          <td className="flex flex-row justify-center mt-2 h-full">
            <div
              className="h-7 w-7 bg-red-600 cursor-pointer rounded-full items-center justify-center flex text-white font-extrabold hover:bg-red-700 hover:shadow-xl"
              onClick={() => handleRemoveLesson(i)}
            >
              <FaTrashCan />
            </div>
          </td>
        </tr>
      );
    });
  }

  const handleToggleMandatory = () => {
    if (lessonMandatory) {
      setLessonMandatory(false);
      setLessonMinimumPassingScore("0");
    } else {
      setLessonMandatory(true);
      setLessonMinimumPassingScore("60");
    }
  };

  return (
    <div>
      <SectionTitle title="Cadastrar novo curso" />
      <div className="flex m-auto flex-col w-full md:w-[500px] p-2 text-gray-300">
        <div className="flex flex-col gap-4">
          <div className="">
            <label htmlFor="name" className="block">
              Nome do curso
            </label>
            <div>
              <input
                type="text"
                placeholder="Nome do curso"
                className={inputClasses}
                required
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="description" className="block">
              Descrição do curso
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              onChange={(e) => setCourseDescription(e.target.value)}
              value={courseDescription}
              className={inputClasses}
              required
              placeholder="Descrição do curso"
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="description" className="block">
              Local do NFT/imagem (URI)
            </label>
            <input
                type="text"
                placeholder="Local da imagem (de preferência IPFS)"
                className={inputClasses}
                required
                onChange={(e) => setCourseImageURI(e.target.value)}
                value={courseImageURI}
              />
          </div>
          {/* <div className="">
            <label htmlFor="description" className="block">
              Preço do curso (Em OP)
            </label>
            <input
                type="number"
                placeholder="Preço do curso (em Eth)"
                className={inputClasses}
                required
                onChange={(e) => setCoursePrice(e.target.value)}
                value={coursePrice}
              />
          </div> */}
          <div className="">
            <label htmlFor="description" className="flex flex-row items-center">
              Módulos
              {!openAddLesson && (
                <div
                  className="h-8 w-8 mx-3 rounded-full bg-gray-300 border border-gray-300 transition-all ease-in-out cursor-pointer text-primary-color-medium flex items-center justify-center font-extrabold hover:bg-primary-color-medium hover:text-gray-300"
                  onClick={() => setOpenAddLesson(true)}>+</div>
              )}
            </label>
            {lessons.length === 0 && !openAddLesson && (
              <div className="mt-4">Não há módulos cadastrados</div>
            )}
            {openAddLesson && (
              <div className="flex flex-col p-6">
                <div className="">
                  <label htmlFor="name" className="block">
                    Nome do módulo
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Nome do módulo"
                      className={inputClasses}
                      required
                      onChange={(e) => setLessonName(e.target.value)}
                      value={lessonName}
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="description" className="block">
                    Descrição do módulo
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={6}
                    onChange={(e) => setLessonContent(e.target.value)}
                    className={inputClasses}
                    required
                    placeholder="Descrição do módulo"
                    value={lessonContent}
                  ></textarea>
                </div>
                <div className="">
                  <label htmlFor="name" className="block">
                    Link do conteúdo
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Link do conteúdo"
                      className={inputClasses}
                      required
                      onChange={(e) => setLessonDocURI(e.target.value)}
                      value={lessonDocURI}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/2 h-20">
                    <label htmlFor="mandatory" className="block">
                      Módulo obrigatório?
                    </label>
                    <div className="flex flex-row items-center gap-2">
                      Sim
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        checked={lessonMandatory}
                        onChange={handleToggleMandatory}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    {lessonMandatory && (
                      <div className="">
                        <label htmlFor="minimumApproval" className="block">
                          Mínimo para aprovação
                        </label>
                        <input
                          type="number"
                          pattern="\d{1,3}"
                          placeholder=""
                          className={inputClasses}
                          onChange={(e) =>
                            setLessonMinimumPassingScore(e.target.value)
                          }
                          value={lessonMinimumPassingScore}
                          max={100}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <label htmlFor="description" className="block">
                    Questões para avaliação
                  </label>
                  <textarea
                    cols={30}
                    rows={6}
                    onChange={(e) => setLessonQuestion(e.target.value)}
                    className={inputClasses}
                    required
                    placeholder="Questões para avaliação"
                    value={lessonQuestion}
                  ></textarea>
                </div>
                <div className="flex flex-row gap-8">
                  <Button
                    color="gray"
                    className="w-full"
                    onClick={handleAddLesson}
                  >
                    Adicionar módulo
                  </Button>
                  <Button
                    color="gray"
                    className="w-full"
                    onClick={handleCancelAddLesson}
                  >
                    Cancelar adição
                  </Button>
                </div>
              </div>
            )}
            {lessons.length !== 0 && (
              <table className="rounded-3xl overflow-hidden w-full mt-3">
                <thead className="bg-primary-color-strong font-bold text-sm">
                  {renderHeader()}
                </thead>
                <tbody>{renderData()}</tbody>
              </table>
            )}
            {!openAddLesson && (
              <div className="">
                {/* <button type="submit">Salvar Curso</button> */}
                <Button icon={<FaSave />} color="gray" onClick={handleSaveCourse}>
                  Salvar Curso
                </Button>
              </div>
            )}
          </div>
        </div>
        <ShowError error={error} />
        <ShowSuccess
          successMessage="Curso criado com sucesso"
          hash={hash as string}
        />
      </div>
    </div>
  );
}

export default CreateCoursePage;
