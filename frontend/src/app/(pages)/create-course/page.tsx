"use client";
import Button from "@/app/components/Button";
import PageTitle from "@/app/components/PageTitle";
import FormatService from "@/app/services/FormatService";
import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useWriteContract, type BaseError, useAccount } from "wagmi";
import { AcademicManagerSmartContractABI, AcademicManagerSmartContractAddress } from "@/app/blockchain";
import ShowError from "@/app/components/ShowError";
import ShowSuccess from "@/app/components/ShowSuccess";
import { useRouter } from "next/navigation";
import { ToastService } from "@/app/services/ToastService";

function CreateCoursePage() {
  interface Lesson {
    lessonId: number;
    lessonName: string;
    lessonContent: string;
    mandatory: boolean;
    minimumPassingScore: number;
  }
  const { data: hash, writeContract, error } = useWriteContract() 
  const router = useRouter()
  const {address}  = useAccount()
  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [openAddLesson, setOpenAddLesson] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [lessonName, setLessonName] = useState("");
  const [lessonContent, setLessonContent] = useState("");
  const [lessonMandatory, setLessonMandatory] = useState(true);
  const [lessonMinimumPassingScore, setLessonMinimumPassingScore] =
    useState("70");

  function handleAddLesson() {
    if (lessonName.length <4 ){
      ToastService.notifyError('Digite um nome para o módulo')
      return
    }

    if (lessonContent.length <4 ){
      ToastService.notifyError('Digite o conteúdo do módulo')
      return
    }
    const newLesson: Lesson = {
      lessonId: lessons.length,
      lessonName: lessonName,
      lessonContent: lessonContent,
      mandatory: lessonMandatory,
      minimumPassingScore: parseInt(lessonMinimumPassingScore),
    };
    const updatedLessons = [...lessons, newLesson];
    setLessons(updatedLessons);
    setOpenAddLesson(false);
    setLessonName("");
    setLessonContent("");
  }

  useEffect(() => {
    if (!address) router.push('/')
  }, [address, router])

  function handleCancelAddLesson() {
    setOpenAddLesson(false);
    setLessonName("");
    setLessonContent("");
  }

  function handleSaveCourse(){
    if (courseName.length <4 ){
      ToastService.notifyError('Descreva melhor o nome do curso')
      return
    }
    if (courseDescription.length <4 ){
      ToastService.notifyError('Descreva melhor a descrição do curso')
      return
    }
    if (lessons.length === 0 ){
      ToastService.notifyError('Cadastre pelo menos uma disciplina')
      return
    }
    writeContract({ 
      address: AcademicManagerSmartContractAddress, 
      abi: AcademicManagerSmartContractABI, 
      functionName: 'createCourse', 
      args: [courseName, courseDescription, 'sadfsd', lessons], 
    })
  }
  
  useEffect(() => {
    setCourseName('')
    setCourseDescription('')
    setLessons([])
  }, [hash])
  

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
      setLessonMinimumPassingScore("70");
    }
  };
  
  return (
    <div>
      <PageTitle
        title="Cadastrar novo curso"
        subtitle="Cadastre o novo curso da plataforma"
      />
      <div className="flex m-auto flex-col w-full md:w-[500px] p-2">
        <form>
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
              Módulos
            </label>
            {lessons.length === 0 ? (
              <div className="">Não há módulos cadastrados</div>
            ) : (
              <table className="rounded-3xl overflow-hidden w-full">
                <thead className="bg-secondary-color-medium font-bold text-sm">
                  {renderHeader()}
                </thead>
                <tbody>{renderData()}</tbody>
              </table>
            )}
            {!openAddLesson ? (
              <div className="">
                <Button color="orange" onClick={() => setOpenAddLesson(true)}>
                  Adicionar módulo
                </Button>
                <Button color="orange" onClick={handleSaveCourse}>
                  Salvar Curso
                </Button>
              </div>
            ) : (
              <div className="flex flex-col p-10">
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
                <div className="flex w-full">
                  <div className="w-1/2">
                    <label htmlFor="mandatory" className="block">
                      Módulo obrigatório?
                    </label>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      checked={lessonMandatory}
                      onChange={handleToggleMandatory}
                    />
                    {lessonMandatory ? "sim" : "nao"}
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
                <div className="flex flex-row gap-8">
                  <Button
                    color="orange"
                    className="w-full"
                    onClick={handleAddLesson}
                  >
                    Salvar
                  </Button>
                  <Button
                    color="orange"
                    className="w-full"
                    onClick={handleCancelAddLesson}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
        <ShowError error={error} />
        <ShowSuccess successMessage="Curso criado com sucesso" hash={hash as string} />
      </div>
    </div>
  );
}

export default CreateCoursePage;
